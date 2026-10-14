import { completionReceipt } from '../completionReceipt';
import type { Progress } from '../progress';
import { ART_CURRICULUM_VERSION } from '../../../data/artCurriculum';
let mockSaved: string | null = null;
jest.mock('@react-native-async-storage/async-storage',()=>({__esModule:true,default:{getItem:jest.fn(async()=>mockSaved),setItem:jest.fn(async(_key:string,value:string)=>{mockSaved=value;})}}));
const initial = (): Progress => ({curriculumVersion:ART_CURRICULUM_VERSION,totalXP:42,completedParts:{},completedQuizVariants:{},streakCount:4,lastPlayedDate:'2026-10-13'});
const lesson={topicId:'art',subtopicId:'painting',levelId:'1',partId:'1',totalParts:5};

test('a completed quiz cannot display hypothetical percentage XP when no reward was persisted',()=>{
  const before=initial();
  expect(completionReceipt(before,{...before,completedQuizVariants:{art:{painting:{'1':{'1':['A']}}}}},lesson)).toEqual({xp:0,partCompleted:false,levelCompleted:false});
  expect(before).toEqual(initial());
});
test('receipt reports the actual XP delta and actual part/level completion without granting rewards',()=>{
  const before=initial(),after={...before,totalXP:57,completedParts:{art:{painting:{'1':['1','2','3','4','5']}}}};
  expect(completionReceipt(before,after,lesson)).toEqual({xp:15,partCompleted:true,levelCompleted:true});
  expect(completionReceipt(before,after,{...lesson,totalParts:0}).levelCompleted).toBe(false);
  expect(after.totalXP).toBe(57);
});
test('real A/B/C completion writer produces accurate receipts and survives storage reload',async()=>{
  jest.resetModules();mockSaved=null;
  const progress=await import('../progress');await progress.saveProgress(initial());
  for(const variant of ['A','B','C']) {
    const before=await progress.loadProgress();
    await progress.markQuizVariantCompleted('art','painting','1','1',variant);
    expect(completionReceipt(before,await progress.loadProgress(),lesson)).toEqual({xp:0,partCompleted:variant==='C',levelCompleted:false});
  }
  jest.resetModules();const reloaded=await import('../progress');
  expect(await reloaded.loadProgress()).toMatchObject({totalXP:42,streakCount:4,completedParts:{art:{painting:{'1':['1']}}}});
});
test('finishing the last part reports real level completion rather than hardcoded false',async()=>{
  jest.resetModules();const progress=await import('../progress');
  const before={...initial(),completedParts:{art:{painting:{'1':['1','2','3','4']}}},completedQuizVariants:{art:{painting:{'1':{'5':['A','B']}}}}};
  await progress.saveProgress(before);await progress.markQuizVariantCompleted('art','painting','1','5','C');
  expect(completionReceipt(before,await progress.loadProgress(),{...lesson,partId:'5'})).toEqual({xp:0,partCompleted:true,levelCompleted:true});
});

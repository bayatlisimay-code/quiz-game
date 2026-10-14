import React from 'react';
import type { ReactNode, ReactElement } from 'react';
import QuizResult from '../../../app/quizResult';
const mockReplace=jest.fn(), mockBack=jest.fn();
let mockParams: Record<string,string>={};
jest.mock('expo-router',()=>({useLocalSearchParams:()=>mockParams,useRouter:()=>({replace:mockReplace,back:mockBack})}));
jest.mock('react',()=>({...jest.requireActual('react'),useMemo:(fn:()=>unknown)=>fn()}));
jest.mock('react-native',()=>({Pressable:'Pressable',Text:'Text',View:'View',StyleSheet:{create:(v:unknown)=>v}}));
function pressables(node:ReactNode): ReactElement<Record<string,unknown>>[] {
 if(!React.isValidElement<Record<string,unknown>>(node))return [];
 return [...(node.type==='Pressable'?[node]:[]),...React.Children.toArray(node.props.children as ReactNode).flatMap(pressables)];
}
beforeEach(()=>{mockReplace.mockReset();mockBack.mockReset();mockParams={};});
test('Continue from a cold deep-linked quiz replaces the result with its guarded chooser',()=>{
 mockParams={retryTopicId:'art',retrySubtopicId:'painting',retryLevelId:'2',retryPartId:'5',score:'8',total:'8',xp:'0'};
 const continueButton=pressables(QuizResult())[1];
 (continueButton.props.onPress as ()=>void)();
 expect(mockReplace).toHaveBeenCalledWith({pathname:'/topic/[topicId]/subtopic/[subtopicId]/level/[levelId]/[partId]',params:{topicId:'art',subtopicId:'painting',levelId:'2',partId:'5'}});
 expect(mockBack).not.toHaveBeenCalled();
});
test('Continue without valid retry coordinates has a safe Home destination without back history',()=>{
 (pressables(QuizResult())[1].props.onPress as ()=>void)();
 expect(mockReplace).toHaveBeenCalledWith('/');expect(mockBack).not.toHaveBeenCalled();
});

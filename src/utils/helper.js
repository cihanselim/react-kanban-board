import Storage from '../services/StorageService';
import { v4 as uuidv4 } from 'uuid';

export const generateBoard = () => {
	return Storage.getItem('kanbanBoardData')?.length > 0
		? Storage.getItem('kanbanBoardData')
		: [
			{
				id: uuidv4(),
				title: 'READY FOR DEV',
				issues: [
					{ id: uuidv4(), title: 'Issue 1', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
					{ id: uuidv4(), title: 'Issue 2', description: 'use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.' },
					{ id: uuidv4(), title: 'Issue 3', description: 'ype specimen book. It has survived not only five centuries.' }
				]
			},
			{
				id: uuidv4(),
				title: 'IN DEVELOPMENT',
				issues: [
					{ id: uuidv4(), title: 'Issue 1', description: 'use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.' },
				]
			},
			{
				id: uuidv4(),
				title: 'IN TEST',
				issues: []
			},
			{
				id: uuidv4(),
				title: 'DONE',
				issues: [
					{ id: uuidv4(), title: 'Issue 1', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.' },
					{ id: uuidv4(), title: 'Issue 2', description: 'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.' }
				]
			}
		];
};

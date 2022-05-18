import { StudentListPipe } from './student-list.pipe';

describe('StudentListPipe', () => {
  it('create an instance', () => {
    const pipe = new StudentListPipe();
    expect(pipe).toBeTruthy();
  });
});

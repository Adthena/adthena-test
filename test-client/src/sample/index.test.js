import dao from '@services/dao';
import { start } from './index';

jest.mock('@services/dao');
jest.mock('react-dom');

describe('sample', () => {
  it('should start', async () => {
    const adthena = 'Adthena';
    dao.GET = jest.fn(async (message) => ({ message }));
    await start(adthena);
    expect(dao.GET).toBeCalledWith(`/api/status?message=${adthena}`);
  });
});

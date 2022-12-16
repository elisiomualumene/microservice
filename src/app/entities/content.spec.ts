import { Content } from './content';

describe('Notification Content', () => {
  it('Should be able to create a notification content', () => {
    const content = new Content('Voce recebeu uma notificação');

    expect(content).toBeTruthy();
  });

  it('Should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('Should not be able to create a notification content with more than 250 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});

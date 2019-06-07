import pingService from './ping.service';

describe('PingService', () => {
    beforeAll(() => {});

    it('should return pong', () => {
        expect(pingService.ping()).toStrictEqual({ message: 'pong!' });
    });

    afterAll(() => {});
});

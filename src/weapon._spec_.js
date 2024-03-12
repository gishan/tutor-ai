const initBattleMode = (fn) =>
  new Promise((res) => res(fn ? fn({ ready: true }) : { ready: true }));

describe('Weapon Module', () => {
  it('a simple test', () => {
    expect(2 + 2).toBe(4);
  });

  it('check object with toEqual', () => {
    const weapon = { type: 'laser' };
    expect(weapon).toEqual({ type: 'laser' });
  });

  it('check object with toBe', () => {
    const weapon = { type: 'laser' };
    expect(weapon).toBe({ type: 'laser' });
  });

  it('string comparison', () => {
    expect('photon cannon').toMatch(/cannon/);
    expect('laser').toHaveLength(5);
  });

  it('check numbers', () => {
    expect(4).toBeGreaterThanOrEqual(4);
    expect(5).toBeGreaterThan(4);
    expect(1).toBeLessThanOrEqual(1);
    expect(0).toBeLessThan(1);
  });

  it('check an object', () => {
    const weapon = { type: 'laser', damage: 100, range: 10, available: false };
    expect(weapon).toHaveProperty('type', 'laser');
    expect(weapon).toMatchObject({
      type: 'laser',
      damage: 100,
      available: false,
    });
  });

  it('check an array', () => {
    const weapons = ['phaser', 'laser', 'plasma Cannon', 'photon torpedo'];
    expect(weapons).toContain('laser');
  });

  it('check dynamic string', () => {
    expect('disruptor').toEqual(expect.any(String));
    expect(1).toEqual(expect.any(Number));
    expect(false).toEqual(expect.any(Boolean));
  });

  it('check dynamic object', () => {
    const weapon = { type: 'laser', damage: 100, range: 10, available: false };
    expect(weapon).toEqual(
      expect.objectContaining({
        damage: expect.any(Number),
        type: expect.any(String),
        available: expect.any(Boolean),
      })
    );
  });

  it('check dynamic array', () => {
    const weapons = [
      { type: 'phaser', damage: 150, range: 15, speed: 'fast' },
      { type: 'photon cannon', damage: 10000, range: 100, speed: 'slow' },
    ];
    expect(weapons).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          type: expect.any(String),
          damage: expect.any(Number),
          range: expect.any(Number),
          speed: expect.any(String),
        }),
      ])
    );
  });

  it('test callback', (done) => {
    initBattleMode((data) => {
      try {
        expect(data).toEqual({ ready: true });
        done();
      } catch (error) {
        done(error);
      }
    });
  });

  it('check promise', () => {
    return initBattleMode().then((data) => {
      expect(data).toEqual({ ready: true });
    });
  });

  it('check async', async () => {
    const data = await initBattleMode();
    expect(data).toEqual({ ready: true });
  });
});

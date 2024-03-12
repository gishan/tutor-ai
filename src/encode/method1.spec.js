import findIntent from './method1.js';

const slide = {
  position: 3,
  boxes:
    '[{"word":"Follow","confidence":91,"x_start":165,"y_start":18,"x_end":235,"y_end":36},{"word":"me","confidence":91,"x_start":242,"y_start":23,"x_end":274,"y_end":36},{"word":"L\\\\","confidence":22,"x_start":333,"y_start":30,"x_end":394,"y_end":55},{"word":"\\u003cstrong\\u003e|10$\\u003c/strong\\u003e","confidence":77,"x_start":86,"y_start":114,"x_end":135,"y_end":145},{"word":"0.01s","confidence":92,"x_start":296,"y_start":119,"x_end":341,"y_end":133},{"word":"‘","confidence":51,"x_start":351,"y_start":116,"x_end":352,"y_end":145},{"word":"2","confidence":96,"x_start":112,"y_start":170,"x_end":127,"y_end":191},{"word":"5","confidence":96,"x_start":311,"y_start":170,"x_end":326,"y_end":191},{"word":"The","confidence":78,"x_start":89,"y_start":259,"x_end":117,"y_end":272},{"word":"digit","confidence":87,"x_start":122,"y_start":259,"x_end":155,"y_end":275},{"word":"in","confidence":91,"x_start":161,"y_start":259,"x_end":173,"y_end":272},{"word":"the","confidence":90,"x_start":178,"y_start":259,"x_end":202,"y_end":272},{"word":"tens","confidence":86,"x_start":207,"y_start":261,"x_end":239,"y_end":272},{"word":"place","confidence":85,"x_start":245,"y_start":259,"x_end":283,"y_end":275},{"word":"is","confidence":62,"x_start":289,"y_start":259,"x_end":300,"y_end":272},{"word":"....","confidence":86,"x_start":305,"y_start":269,"x_end":323,"y_end":272},{"word":"It","confidence":93,"x_start":96,"y_start":298,"x_end":105,"y_end":310},{"word":"has","confidence":91,"x_start":110,"y_start":298,"x_end":136,"y_end":311},{"word":"a","confidence":79,"x_start":141,"y_start":301,"x_end":149,"y_end":311},{"word":"value","confidence":79,"x_start":154,"y_start":298,"x_end":193,"y_end":310},{"word":"of","confidence":91,"x_start":199,"y_start":298,"x_end":214,"y_end":311},{"word":"..","confidence":90,"x_start":223,"y_start":308,"x_end":225,"y_end":310},{"word":"The","confidence":78,"x_start":81,"y_start":368,"x_end":109,"y_end":381},{"word":"digit","confidence":92,"x_start":114,"y_start":368,"x_end":148,"y_end":384},{"word":"in","confidence":92,"x_start":153,"y_start":368,"x_end":165,"y_end":381},{"word":"the","confidence":92,"x_start":170,"y_start":368,"x_end":194,"y_end":381},{"word":"tenths","confidence":92,"x_start":199,"y_start":369,"x_end":247,"y_end":381},{"word":"place","confidence":86,"x_start":253,"y_start":369,"x_end":292,"y_end":384},{"word":"is","confidence":86,"x_start":297,"y_start":368,"x_end":308,"y_end":381},{"word":"It","confidence":91,"x_start":86,"y_start":429,"x_end":95,"y_end":442},{"word":"has","confidence":91,"x_start":101,"y_start":429,"x_end":126,"y_end":442},{"word":"a","confidence":87,"x_start":131,"y_start":433,"x_end":139,"y_end":442},{"word":"value","confidence":87,"x_start":144,"y_start":430,"x_end":183,"y_end":442},{"word":"of","confidence":92,"x_start":189,"y_start":429,"x_end":204,"y_end":442},{"word":"The","confidence":65,"x_start":78,"y_start":521,"x_end":107,"y_end":533},{"word":"digit","confidence":75,"x_start":112,"y_start":520,"x_end":145,"y_end":536},{"word":"in","confidence":88,"x_start":150,"y_start":520,"x_end":162,"y_end":533},{"word":"the","confidence":88,"x_start":167,"y_start":521,"x_end":191,"y_end":533},{"word":"hundredths","confidence":6,"x_start":197,"y_start":521,"x_end":285,"y_end":533},{"word":"place","confidence":89,"x_start":290,"y_start":521,"x_end":329,"y_end":536},{"word":"is","confidence":90,"x_start":334,"y_start":520,"x_end":345,"y_end":533},{"word":"It","confidence":92,"x_start":82,"y_start":579,"x_end":92,"y_end":592},{"word":"has","confidence":92,"x_start":97,"y_start":579,"x_end":122,"y_end":592},{"word":"a","confidence":91,"x_start":127,"y_start":583,"x_end":135,"y_end":592},{"word":"value","confidence":91,"x_start":141,"y_start":579,"x_end":181,"y_end":591},{"word":"of","confidence":92,"x_start":186,"y_start":579,"x_end":201,"y_end":592},{"word":"Your","confidence":91,"x_start":616,"y_start":18,"x_end":666,"y_end":36},{"word":"turn","confidence":91,"x_start":671,"y_start":20,"x_end":714,"y_end":36}]',
};

const intent = {
  proximity_index: 1,
  proximity_sentence: 'The digit in the tens place is',
  proximity_related_to: ['x_start', 'y_start'],
  text: '2',
  color: '#000000',
  topic: 'textTool',
  annotationType: 'text',
};

describe('find intent', () => {
  it('should be defined', () => {
    expect(findIntent).toBeDefined();
  });

  it('should intent.proximity_sentence is a string', () => {
    const fn = () => findIntent({}, {});
    expect(fn).toThrow('intent.proximity_sentence is not a string');
  });

  it('should intent.proximity_sentence is a string', () => {
    const fn = () => findIntent(intent, {});
    expect(fn).not.toThrow('intent.proximity_sentence is not a string');
  });

  it('should intent.proximity_sentence not be an empty string', () => {
    const fn = () =>
      findIntent(
        {
          ...intent,
          proximity_sentence: '',
        },
        {}
      );
    expect(fn).toThrow('intent.proximity_sentence is an empty string');
  });

  it('should slide.boxes not be an empty string', () => {
    const fn = () => findIntent(intent, { ...slide, boxes: null });
    expect(fn).toThrow('slide.boxes is not an empty string');
  });

  // it('should slide.boxes be converted to an array', () => {
  //   const fn = () => findIntent(intent, { ...slide, boxes: 'lorem ipsum' });
  //   expect(fn).toThrow('jsonBoxes in not an array');
  // });

  it('should jsonBoxes have at least one object which matches with first element of parts', () => {
    const fn = () => findIntent(intent, slide);

    ex

  })
});

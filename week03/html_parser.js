const htmlString = '<html><head><title>test</title></head><body><span>TEST <a href="http://someLink.com">go to <span>somewhere<br/></span></a>span</span></body></html>';

function Dom(htmlString) {
  this.dom = this.parseHtml(htmlString);
}

Dom.prototype.parseHtml = (htmlString) => {
  const domStack = [{
    tagName: 'ROOT',
    type: 'node',
    children: [],
  }];
  const readStringUtilClosingTag = (startPos) => {
    let res = ''
    for (let i = startPos + 1; htmlString[i] !== '>'; i += 1) {
      res += htmlString[i];
    }

     return res;
  }
  const readStringUtilOpenTag = (startPos) => {
    let res = ''
    for (let i = startPos + 1; htmlString[i] !== '<'; i += 1) {
      res += htmlString[i];
    }

     return res;
  }
  const makeObj = (curPos) => {
    const trimSelfClosing = (tagName) => {
      let tmp = tagName.split('');
      tmp = tmp.slice(0, -1);

      return tmp.join('');
    }

    let tag = readStringUtilClosingTag(curPos);
    if (tag.endsWith('/')) {
      tag = trimSelfClosing(tag);
    }
    let htmlToken = tag.split(' ');
    const htmlObj = {
      tagName: htmlToken[0],
      type: 'elementNode',
      attributes: {},
      children: [],
    };

    htmlToken.shift();

    if (htmlToken.length) {
      htmlToken = htmlToken.flatMap(e => e.split('='))
      for (let i=0; i<htmlToken.length / 2; i++) {
        htmlObj.attributes[htmlToken[i]] = htmlToken[i+1];
      }
    }

    return htmlObj;
  }

  const isClosingTag = (tagString) => {
    return tagString.startsWith('/');
  }

  const isSelfClosingTag = (tagString) => {
    return tagString.endsWith('/') && domStack[domStack.length - 1].tagName !== tagString
  }

  const appendChildNode = (childElement) => {
    const parentElement = domStack.pop();
    parentElement.children.push(childElement);
    domStack.push(parentElement);
  };

  const makeDom = () => {
    for (let i=0; i<htmlString.length; i++) {
      if (htmlString[i] === '<') {
        const tag = readStringUtilClosingTag(i);
        
        if (!isClosingTag(tag)) {
          domStack.push(makeObj(i));

          if (isSelfClosingTag(tag)) {
            const childElement = domStack.pop();
            appendChildNode(childElement);
          }
        } else {
          const childElement = domStack.pop();
          appendChildNode(childElement);
        }
      } else if (htmlString[i] === '>' && htmlString[i+1] !== '<' && i+1 !==htmlString.length) {
        const tag = readStringUtilOpenTag(i);
        const childElement = {
          type: 'textNode',
          value: tag,
        };
        appendChildNode(childElement);
      }
    }
    return domStack[0];
  }
  return makeDom();
}

const myDom = new Dom(htmlString);
console.log(JSON.stringify(myDom.dom))
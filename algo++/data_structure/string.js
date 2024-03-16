class StringAlgo {
  #str="";
  constructor(str) {
    this.#str = str;
  }
  reverse() { 
    return this.#str.split("").reverse().join("");
  }

  toArray() { 
    return this.#str.split("");
  }

  leftRotate(num = 1) {
    const str = this.#str;
    const size = str.length;
    num = num % size;
    const s1 = str.substring(num, size);
    const s2 = str.substring(0, num);

    return s1 + s2;
  }

  rightRotate(num = 1) {
    const str = this.#str;
    const size = str.length;
    const s1 = str.substring(size - num, size);
    const s2 = str.substring(0, size - num);

    return s1 + s2;
  }

  search(str2) {
    const str = this.#str;
    const size = str.length;
    const size2 = str2.length;
    let ansArr = [];
    if (size2 === 1) {
      for (let i = 0; i < size; i++) {
        if (str[i] == str2) {
          ansArr.push(i);
        }
      }

      return ansArr;
    } else if (size2 === 2) {
      for (let i = 0; i < size - 1; i++) {
        if (str[i] + str[i + 1] == str2) {
          ansArr.push(i);
        }
      }

      return ansArr;
    } else {
      //KMP algorithm
      const tempStr = str2 + "#&" + str;
      const sizeTemp = tempStr.length;
      let kmpArray = new Array(sizeTemp).fill(0);
      let countMatch = 0;
      let j = 0;
      for (let i = size2 + 2; i < sizeTemp; i++) {
        if (tempStr[i] === tempStr[j]) {
          j++;
          countMatch++;
        } else {
          j = 0;
          countMatch = 0;
          if (tempStr[i] === tempStr[j]) {
            countMatch++;
            j++;
          }
        }
        kmpArray[i - (size2 + 2)] = countMatch;
      }

      for (let i = 0; i < sizeTemp; i++) {
        if (kmpArray[i] === size2) {
          ansArr.push(i - (size2 - 1));
        }
      }

      return ansArr;
    }
  }

  swap(num1,num2)
  {
    const size = this.#str.length;
    const s1 = this.#str.substring(num1,num1+1);
    const s2 = this.#str.substring(num2,num2+1);
    var newStr = ""
    for(let i=0;i<size;i++)
    {
        if(i===num1)
        {
            newStr+=s2;
        }else
        if(i===num2)
        {
            newStr+=s1;
        }
        else{
            newStr+=this.#str[i];
        }
    }
    
    return newStr;
  }

  insert(num,str2)
  {
    return [this.#str.slice(0, num), str2, this.#str.slice(num)].join('');
  }

  

}

module.exports = StringAlgo;

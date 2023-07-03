class TextClock {
  getCurrentTime () {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    return [hours,minutes];
  }

  formatTimeAsText () {
    const rawTime = this.getCurrentTime();
    return [this.returnMin(rawTime[1]), this.returnPastOrTo(rawTime[1]), this.returnHour(rawTime[0]), this.checkAmPm(rawTime[0])]
  }

  checkAmPm (time) {
    if(time > 11){ return 'pm' } else { return 'am' }
  }

  returnHour (time) {
    let hour = 0;
    if (time > 12) { hour = time - 12 } else { hour = time}
    const numberMap = {
      1: "oneNumber",
      2: "twoNumber",
      3: "threeNumber",
      4: "fourNumber",
      5: "fiveNumber",
      6: "sixNumber",
      7: "sevenNumber",
      8: "eightNumber",
      9: "nineNumber",
      10: "tenNumber",
      11: "elevenNumber",
      12: "twelveNumber"
    }
    return numberMap[hour]
  }

  returnMin (time) {
    const minMap = {
      1: "half",
      2: "twenty",
      3: "aquarter",
      4: "ten",
      5: "five",
      6: "",
      7: "twentyfive"
    }

    if (time < 5) { return minMap[6] }
    else if (time > 5 && time < 10) { return minMap[5] }
    else if (time > 9 && time < 15) { return minMap[4] }
    else if (time > 14 && time < 20) { return minMap[3] }
    else if (time > 19 && time < 25) { return minMap[2] }
    else if (time > 24 && time < 30) { return minMap[7] }
    else if (time > 29 && time < 35) { return minMap[1] } 
    else if (time > 34 && time < 40) { return minMap[7] } 
    else if (time > 39 && time < 45) { return minMap[2] }
    else if (time > 44 && time < 50) { return minMap[3] } 
    else if (time > 49 && time < 55) { return minMap[4] } 
    else if (time > 54 && time < 59) { return minMap[5] } 
  }

  returnPastOrTo (time) {
    const pastToMap = {
      1: "past",
      2: "to",
      3: ""
    }

    if (time < 30 && time > 4) { return pastToMap[1] } 
    else if ( time > 30) { return pastToMap[2] }
    else { return pastToMap[3] }
  }
}


module.exports = TextClock;
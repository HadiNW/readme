class Diary {
    constructor(month, day) {
        this.month = month
        this.day = day
        this.diaries = []
        this.generateDiary()
        // this.diary = new Day(date, note)
    }

    generateDiary () {
        for (let i = 0; i < this.day; i++) {
            this.diaries.push(new Day(i+1))
        }
    }

    write(date, note) {
        // this.generateDiary()       
        this.diaries[date-1].note.push(note)
    }
}

class Day {
    constructor(date, note) {
        this.date = date
        this.note = []
    }
}


class DiaryFactory {
    constructor() {
        this.diaries = {}
    }
    static create (month) {
        let day = 0;
        switch (month) {
            case 'january': 
            day = 31
            break;
            case 'february':
            day =  28
            break;
            case 'march': 
            day = 30
            break;
            case 'april': 
            day = 30
            break;
            case 'may': 
            day = 31
            break;
            case 'june': 
            day = 30
            break;
            case 'july': 
            day = 31
            break;
            case 'august': 
            day = 31
            break;
            case 'september': 
            day = 30
            break;
            case 'october': 
            day = 31
            break;
            case 'november': 
            day = 30
            break;
            case 'desember': 
            day = 31
            break;
        }
        let diary = new Diary(month, day)
        return diary
    }

   
}

let septemberDiary = DiaryFactory.create('september')
// console.log(septemberDiary)
septemberDiary.write(1, 'belajar sudoku')

console.log(septemberDiary)

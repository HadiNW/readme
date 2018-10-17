class Diary {
    constructor(month, day, diaries){
        this.month = month
        this.day = day
        this.diaries = []
    }
}

class Day{
    constructor(hari, name){
        this.hari=hari
        this.name = name
        this.note = []
    }
}

class DiaryFactory{
    static create(month,notes){
        let day = 0
        if (month === 'januari') day = 31
        if (month === 'februari') day = 28
        if (month === 'maret') day = 31
        if (month === 'april') day = 30
        if (month === 'mei') day = 31
        if (month === 'juni') day = 30
        if (month === 'juli') day = 31
        if (month === 'agustus') day = 31
        if (month === 'september') day = 30
        if (month === 'oktober') day = 31
        if (month === 'november') day = 30
        if (month === 'desember') day = 31
        this.notes = new Day('1','2')
        return new Diary(month, day, notes)
    }
}
let septemberDiary = DiaryFactory.create('september')
console.log(septemberDiary)


// akan menghasilkan
//  DIARY {
//  month: 'september',
//  day: 30
//  diaries: [
//  { Day: {name: 1, note: [ ]}
//   ]
// }
//
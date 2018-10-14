class Hero {
    constructor(name, job, health, mana, defense, money, items) {
        this.name = name
        this.job = job
        this.health = health
        this.mana = mana
        this.defense = defense
        this.money = money
        this.items = items
    }

    buyItem (item) {
        if (item.job !== this.job) {
            console.log('tidak sesuai')
        } else {
            if (item.price <= this.money) {
                this.items.push(item)
                this.health += item.healthpoint
                this.mana += item.manapoint
                this.defense += item.defensepoint
                this.money -= item.price
            }else{
                console.log('uang tidak cukup')
            }
        }
    }

    sellItem(item) {
        let itemSell = false
        let index = 0
        for (let i in this.items) {           
                if (item.name === this.items[i].name) {
                    itemSell = this.items[i]
                    index = i
                }           
        }
        if (itemSell) {
            // console.log(itemSell)
            this.decreasedStatus()
            this.money += (item.price/2)
            this.items.splice(index, 1)
        }else{
            console.log('item not found')
        }
       
    }
    decreasedStatus() {
        this.health -= item.healthpoint
        this.mana -= item.manapoint
        this.defense -=  item.defensepoint
    }

    skill() {
        return 'Ciat..! Serangan tanpa bayangan..'
    }
}

class Assassin extends Hero{
    constructor(name, job, health, mana, defense, money, items) {
        super(name, job, health, mana, defense, money, items)
    }

    skill() {
        return 'Ciat..! Serangan tanpa bayangan..'
    }
}

class Knight extends Hero{
    constructor(name, job, health, mana, defense, money, items) {
        super(name, job, health, mana, defense, money, items)
    }

    skill() {
        return 'Lemparan Perisai Suci'
    }
}

class Mage extends Hero{
    constructor(name, job, health, mana, defense, money, items) {
        super(name, job, health, mana, defense, money, items)
    }

    skill() {
        return 'Terimalah serangan sihir ini..'
    }
}

class Item {
    constructor(name, job, detail, healthpoint, manapoint, defensepoint, price) {
        this.name = name
        this.job = job
        this.detail = detail
        this.healthpoint = healthpoint
        this.manapoint = manapoint
        this.defensepoint =  defensepoint
        this.price = price
    }
}


let archery = new Item('archery', 'Assassin', 'this is archery', 300, 400, 210, 1000)
let sword = new Item('sword', 'Knight', 'this is sword', 200, 600, 100, 550)

let rikimaru = new Assassin('Rikimaru', 'Assassin', 1200, 543, 431, 1000)
let leonidas = new Knight('Leonidas', 'Knight', 3213, 126, 431, 1700)
let gandalf = new Mage('Gandalf', 'Mage', 1130, 603, 231,2500)
let ezio = new Assassin('Ezio', 'Ezio', 1250, 523, 431, 2100)

rikimaru.buyItem(archery)
console.log(rikimaru)
console.log()
rikimaru.sellItem(archery)
console.log(rikimaru)

//filter map reduce

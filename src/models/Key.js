import Model from './Model';

export default class Key extends Model {


    image = null;
    text = null;
    type = null;
    static _nameAttribute = 'keys';


    setAttribute(key, value) {
        this[key] = value;
    }

    static findAll() {

        const rawKeys = super.getDataByNameAttribute()
        const keys = []

        for (let rawKey of rawKeys) {
            const key = new Key(1)

            key.setAttribute('id', rawKey.id);
            key.setAttribute('image', rawKey.image);
            key.setAttribute('text', rawKey.text);
            key.setAttribute('type', rawKey.type);

            keys.push(key)
        }

        return keys
    }
}

// let keys = Key.findAll()

// keys[ 0 ].delete()


// let qwe = new Key()









// /* ******************************************************************** */
// class Model {
//     delete () {
//         console.log( `Delete from [${ this.storageKey }] with ID [${ this.id }]`)
//     }
// }

// class CalendarModel extends Model {
//     id = null
//     storageKey = 'calendar'

//     constructor ( id ) {
//         super()

//         this.id = id
//     }
// }

// let calendar = new CalendarModel( 1 )

// calendar.delete()
// /* ******************************************************************** */



// /* ******************************************************************** */
// class Model {
//     id = null
//     storageKey = null

//     constructor ( id, storageKey ) {
//         this.id = id
//         this.storageKey = storageKey
//     }

//     delete () {
//         console.log( `Delete from [${ this.storageKey }] with ID [${ this.id }]`)
//     }

//     setAttribute ( key, value ) {
//         if ( typeof this[ key ] === 'undefined' ) {
//             throw new Error( 'Аттрибут [' + key + '] не найден' )
//         }

//         this[ key ] = value
//     }
// }

// class CalendarModel extends Model {
//     name = null

//     constructor ( id ) {
//         super( id, 'calendar' )
//     }
// }

// let calendar = new CalendarModel( 1 )

// calendar.setAttribute( 'name', 'CALENDAR_1' )
// /* ******************************************************************** */
var globalValue = window.globalValue || {};
!(function () {
    var dateMock = [
        {
            title: 'текст 1',
            body: 'С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности способствует подготовки и реализации модели развития. Равным образом консультация с широким активом играет важную роль в формировании соответствующий условий активизации. Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения существенных финансовых и административных условий. С другой стороны рамки и место обучения кадров представляет собой интересный эксперимент проверки существенных финансовых и административных условий.',
            img: 'gf-tomsk.png',
            domElemId: 'id_1',
            type: "1"
        },
        {
            title: 'текст 2',
            body: 'Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке систем массового участия. Не следует, однако забывать, что консультация с широким активом позволяет оценить значение модели развития.',
            img: 'innoclusters.png',
            domElemId: 'id_2',
            type: "2"
        },
        {
            title: 'текст 3',
            body: 'Товарищи! укрепление и развитие структуры требуют определения и уточнения системы обучения кадров, соответствует насущным потребностям. Не следует, однако забывать, что реализация намеченных плановых заданий в значительной степени обуславливает создание направлений прогрессивного развития. Идейные соображения высшего порядка, а также укрепление и развитие структуры требуют определения и уточнения дальнейших направлений развития.',
            img: 'invetom.png',
            domElemId: 'id_3',
            type: "3"
        },
        {
            title: 'текст 4',
            body: 'Разнообразный и богатый опыт сложившаяся структура организации способствует подготовки и реализации модели развития. С другой стороны начало повседневной работы по формированию позиции играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач. Задача организации, в особенности же дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям. Таким образом начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки соответствующий условий активизации. Равным образом постоянный количественный рост и сфера нашей активности требуют от нас анализа направлений прогрессивного развития. Таким образом дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития.',
            img: 'omb-biz.png',
            domElemId: 'id_4',
            type: "4"
        }
    ]


    var promiseResult = new Promise(function (resulve, reject) {
        setTimeout(function () {
            return resulve(dateMock)
        }, 3000)
    })

    class MyPromise {

        constructor(functionPromise) {
            this.functionPromise = functionPromise
            this.test=null
            this.resolve = this.resolve.bind( this )
            this.init()
            
        }

        resolve(fun) {
            console.log( this )
            this.test(fun)
        }

        reject(fun) {
            return fun

        }

        init() {
            this.functionPromise(this.resolve, this.reject)
        }

        then(callback, error) {
            this.test = callback

            return this
        }

    }

    globalValue['testPromise']  = new MyPromise((resolve, reject) => {
        setTimeout(() => {
            return resolve(dateMock)
        }, 100)
    })

})();
'use strict'
const Gorev = use('App/Models/Gorevler')

class GorevController {
    async home({view}) {

        // Görevleri getir
        const gorevler = await Gorev.all();

        return view.render('index', { gorevler: gorevler.toJSON() })
    }
}

module.exports = GorevController

// Survie Viking : retire les recettes des armes futuristes de Cataclysm
const ARMES_FUTURISTES = ['cataclysm:laser_gatling','cataclysm:wither_assault_shoulder_weapon','cataclysm:void_assault_shoulder_weapon']
ServerEvents.recipes(event => { ARMES_FUTURISTES.forEach(id => { event.remove({ output: id }) }) })

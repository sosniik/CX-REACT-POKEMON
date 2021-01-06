const fs = require('fs')

async function conversion(){
    let file = fs.readFileSync('./pokedex.json',"utf-8")

    pokeJson = JSON.parse(file)
    numOfPokemon = pokeJson.length
    fs.writeFileSync('./newPokedex.json',"[")  
    for (i=0;i<numOfPokemon;i++){
        attaqueJson = pokeJson[i]["attaques"]
        numOfAttaque = attaqueJson.length
        for (j=0;j<numOfAttaque;j++){
            attaqueJson[j]["numéro"] = pokeJson[i]["numéro"]
        }
        condition = pokeJson[i]["attaques"]
        if (condition!='') {                      
            attaqueStringify = JSON.stringify(attaqueJson)             
            fs.appendFileSync('./attaques.json',attaqueStringify+"\n") 
        }

        delete pokeJson[i]["attaques"]
        pokeStringify = JSON.stringify(pokeJson[i])
        if(i===(numOfPokemon-1)){
            fs.appendFileSync('./newPokedex.json',pokeStringify+"]")
        }
        if(i<(numOfPokemon-1)){
            fs.appendFileSync('./newPokedex.json',pokeStringify+",\n")
        }
    }

    let attaqueFile = fs.readFileSync('./attaques.json',"utf-8")
    attaqueInsert = attaqueFile.replace(/\]\n\[+/g,",\n")
    fs.writeFileSync('./attaques.json',attaqueInsert)  
    return 'Conversion terminé'
}


async function insertion() {
    await conversion()
    let Promise=require('bluebird');
    
    let knex = require('knex')({
    client: 'pg',
    connection: {
        user: 'postgres',
        database: 'pokemon',
        port: 5432,
        host: 'localhost',
        password: 'smith'
    },
    debug: false
    });

    let pokeFile = fs.readFileSync('./newPokedex.json',"utf-8")
    newPokeJson = JSON.parse(pokeFile)
    let attaqueFile = fs.readFileSync('./attaques.json',"utf-8")
    newAttaqueJson = JSON.parse(attaqueFile)

    let pokemonTable =function() {

        return knex.schema.dropTableIfExists('pokedex')
            .then(function() {
                return knex.schema.createTable('pokedex',function(table){
                    table.increments();
                    table.string('numéro',500).nullable();
                    table.string('nom',500).nullable();
                    table.string('nomen',500).nullable();
                    table.string('nomja',500).nullable();
                    table.string('nomtm',500).nullable();
                    table.string('nomde',500).nullable();
                    table.string('légende',500).nullable();
                    table.string('ndex',500).nullable();
                    table.string('jdex',500).nullable();
                    table.string('njdex',500).nullable();
                    table.string('hdex',500).nullable();
                    table.string('fdex',500).nullable();
                    table.string('odex',500).nullable();
                    table.string('opdex',500).nullable();
                    table.string('espece',500).nullable();
                    table.string('taille',500).nullable();
                    table.string('poids',500).nullable();
                    table.string('fmratio',500).nullable();
                    table.string('oeufpas',500).nullable();
                    table.string('effortval',500).nullable();
                    table.string('type1',500).nullable();
                    table.string('type2',500).nullable();
                    table.string('expval',500).nullable();
                    table.string('expmax',500).nullable();
                    table.string('captureval',500).nullable();
                    table.string('groupoeuf1',500).nullable();
                    table.string('groupoeuf2',500).nullable();
                    table.string('capspe1',500).nullable();
                    table.string('capspe2',500).nullable();
                    table.string('capspe2_reve',500).nullable();
                    table.string('couleur',500).nullable();
                    table.string('forme',500).nullable();
                    table.string('pokemon',500).nullable();
                    table.string('numero',500).nullable();
                    table.string('nomromaji',500).nullable();
                    table.string('image',500).nullable();
                    table.string('artwork_supp1_nom',500).nullable();
                    table.string('artwork_supp1_img',500).nullable();
                    table.string('pdm',500).nullable();
                    table.string('diff_rs_rfvf',500).nullable();
                    table.string('pinballRB_gif',500).nullable();
                    table.string('adex',500).nullable();
                    table.string('capspe3',500).nullable();
                    table.string('pinballRS',500).nullable();
                    table.string('pinballRS_gif',500).nullable();
                    table.string('almia',500).nullable();
                    table.string('diff_dp_pt',500).nullable();
                    table.string('diff_4G_fm',500).nullable();
                    table.string('type',500).nullable();
                    table.string('sensib_combat',500).nullable();
                    table.string('sensib_eau',500).nullable();
                    table.string('sensib_électrique',500).nullable();
                    table.string('sensib_feu',500).nullable();
                    table.string('sensib_glace',500).nullable();
                    table.string('sensib_insecte',500).nullable();
                    table.string('sensib_plante',500).nullable();
                    table.string('sensib_poison',500).nullable();
                    table.string('sensib_psy',500).nullable();
                    table.string('sensib_sol',500).nullable();
                    table.string('sensib_spectre',500).nullable();
                    table.string('sensib_ténèbres',500).nullable();
                    table.string('sensib_vol',500).nullable();
                    table.string('rmq_spectre',500).nullable();
                    table.string('rmq_spectre_num',500).nullable();
                    table.string('artwork_supp2_nom',500).nullable();
                    table.string('artwork_supp2_img',500).nullable();
                    table.string('capspe1_desc',500).nullable();
                    table.string('sdex',500).nullable();
                    table.string('diff_fm',500).nullable();
                    table.string('PDM2_supp',500).nullable();
                    table.string('PV',500).nullable();
                    table.string('attaque',500).nullable();
                    table.string('defense',500).nullable();
                    table.string('atq_spc',500).nullable();
                    table.string('def_spc',500).nullable();
                    table.string('vitesse',500).nullable();
                    table.string('special',500).nullable();
                    table.string('artwork_supp3_nom',500).nullable();
                    table.string('artwork_supp3_img',500).nullable();
                    table.string('capspe2_desc',500).nullable();
                    table.string('sensib_acier',500).nullable();
                    table.string('capspe3_desc',500).nullable();
                    table.string('sensib_roche',500).nullable();
                    table.string('artwork_supp4_nom',500).nullable();
                    table.string('artwork_supp4_img',500).nullable();
                    table.string('sensib_normal',500).nullable();
                    table.string('nomko',500).nullable();
                    table.string('nomch',500).nullable();
                    table.string('rmq_insecte',500).nullable();
                    table.string('rmq_insecte_num',500).nullable();
                    table.string('artwork_supp5_nom',500).nullable();
                    table.string('artwork_supp5_img',500).nullable();
                    table.string('artwork_supp6_nom',500).nullable();
                    table.string('artwork_supp6_img',500).nullable();
                    table.string('nudex',500).nullable();
                    table.string('rmq_feu',500).nullable();
                    table.string('rmq_feu_num',500).nullable();
                    table.string('rmq_glace',500).nullable();
                    table.string('rmq_glace_num',500).nullable();
                    table.string('vitesse_max',500).nullable();
                    table.string('force',500).nullable();
                    table.string('force_max',500).nullable();
                    table.string('habilité',500).nullable();
                    table.string('habilité_max',500).nullable();
                    table.string('endurance',500).nullable();
                    table.string('endurance_max',500).nullable();
                    table.string('saut',500).nullable();
                    table.string('saut_max',500).nullable();
                });
            });

    };

    // Insert the pokemon
    let pokemonInsert = function() {
    let insertPromises = [];
    newPokeJson.forEach(function(pokemon) {
    
        insertPromises.push(
            knex('pokedex')
                .insert({
                    numéro : pokemon["numéro"],
                    nom : pokemon["nom"],
                    nomen : pokemon["nomen"],
                    nomja : pokemon["nomja"],
                    nomtm : pokemon["nomtm"],
                    nomde : pokemon["nomde"],
                    légende : pokemon["légende"],
                    ndex : pokemon["ndex"],
                    jdex : pokemon["jdex"],
                    njdex : pokemon["njdex"],
                    hdex : pokemon["hdex"],
                    fdex : pokemon["fdex"],
                    odex : pokemon["odex"],
                    opdex : pokemon["opdex"],
                    espece : pokemon["espece"],
                    taille : pokemon["taille"],
                    poids : pokemon["poids"],
                    fmratio : pokemon["fmratio"],
                    oeufpas : pokemon["oeufpas"],
                    effortval : pokemon["effortval"],
                    type1 : pokemon["type1"],
                    type2 : pokemon["type2"],
                    expval : pokemon["expval"],
                    expmax : pokemon["expmax"],
                    captureval : pokemon["captureval"],
                    groupoeuf1 : pokemon["groupoeuf1"],
                    groupoeuf2 : pokemon["groupoeuf2"],
                    capspe1 : pokemon["capspe1"],
                    capspe2 : pokemon["capspe2"],
                    capspe2_reve : pokemon["capspe2-reve"],
                    couleur : pokemon["couleur"],
                    forme : pokemon["forme"],
                    pokemon : pokemon["pokemon"],
                    numero : pokemon["numero"],
                    nomromaji : pokemon["nomromaji"],
                    image : pokemon["image"],
                    artwork_supp1_nom : pokemon["artwork_supp1-nom"],
                    artwork_supp1_img : pokemon["artwork_supp1-img"],
                    pdm : pokemon["pdm"],
                    diff_rs_rfvf : pokemon["diff_rs-rfvf"],
                    pinballRB_gif : pokemon["pinballRB-gif"],
                    adex : pokemon["adex"],
                    capspe3 : pokemon["capspe3"],
                    pinballRS : pokemon["pinballRS"],
                    pinballRS_gif : pokemon["pinballRS-gif"],
                    almia : pokemon["almia"],
                    diff_dp_pt : pokemon["diff_dp-pt"],
                    diff_4G_fm : pokemon["diff_4G-fm"],
                    type : pokemon["type"],
                    sensib_combat : pokemon["sensib-combat"],
                    sensib_eau : pokemon["sensib-eau"],
                    sensib_électrique : pokemon["sensib-électrique"],
                    sensib_feu : pokemon["sensib-feu"],
                    sensib_glace : pokemon["sensib-glace"],
                    sensib_insecte : pokemon["sensib-insecte"],
                    sensib_plante : pokemon["sensib-plante"],
                    sensib_poison : pokemon["sensib-poison"],
                    sensib_psy : pokemon["sensib-psy"],
                    sensib_sol : pokemon["sensib-sol"],
                    sensib_spectre : pokemon["sensib-spectre"],
                    sensib_ténèbres : pokemon["sensib-ténèbres"],
                    sensib_vol : pokemon["sensib-vol"],
                    rmq_spectre : pokemon["rmq-spectre"],
                    rmq_spectre_num : pokemon["rmq-spectre-num"],
                    artwork_supp2_nom : pokemon["artwork_supp2-nom"],
                    artwork_supp2_img : pokemon["artwork_supp2-img"],
                    capspe1_desc : pokemon["capspe1-desc"],
                    sdex : pokemon["sdex"],
                    diff_fm : pokemon["diff-fm"],
                    PDM2_supp : pokemon["PDM2-supp"],
                    PV : pokemon["PV"],
                    attaque : pokemon["attaque"],
                    defense : pokemon["defense"],
                    atq_spc : pokemon["atq-spc"],
                    def_spc : pokemon["def-spc"],
                    vitesse : pokemon["vitesse"],
                    special : pokemon["special"],
                    artwork_supp3_nom : pokemon["artwork_supp3-nom"],
                    artwork_supp3_img : pokemon["artwork_supp3-img"],
                    capspe2_desc : pokemon["capspe2-desc"],
                    sensib_acier : pokemon["sensib-acier"],
                    capspe3_desc : pokemon["capspe3-desc"],
                    sensib_roche : pokemon["sensib-roche"],
                    artwork_supp4_nom : pokemon["artwork_supp4-nom"],
                    artwork_supp4_img : pokemon["artwork_supp4-img"],
                    sensib_normal : pokemon["sensib-normal"],
                    nomko : pokemon["nomko"],
                    nomch : pokemon["nomch"],
                    rmq_insecte : pokemon["rmq-insecte"],
                    rmq_insecte_num : pokemon["rmq-insecte-num"],
                    artwork_supp5_nom : pokemon["artwork_supp5-nom"],
                    artwork_supp5_img : pokemon["artwork_supp5-img"],
                    artwork_supp6_nom : pokemon["artwork_supp6-nom"],
                    artwork_supp6_img : pokemon["artwork_supp6-img"],
                    nudex : pokemon["nudex"],
                    rmq_feu : pokemon["rmq-feu"],
                    rmq_feu_num : pokemon["rmq-feu-num"],
                    rmq_glace : pokemon["rmq-glace"],
                    rmq_glace_num : pokemon["rmq-glace-num"],
                    vitesse_max : pokemon["vitesse-max"],
                    force : pokemon["force"],
                    force_max : pokemon["force-max"],
                    habilité : pokemon["habilité"],
                    habilité_max : pokemon["habilité-max"],
                    endurance : pokemon["endurance"],
                    endurance_max : pokemon["endurance-max"],
                    saut : pokemon["saut"],
                    saut_max : pokemon["saut-max"]
                })
        );
    });

    return Promise.all(insertPromises);
    };

    // Create Table
    let attaqueTable =function() {
        return knex.schema.dropTableIfExists('attaque')
            .then(function() {
                return knex.schema.createTable('attaque',function(table){
                    table.increments();
                    table.string('niveau').nullable();
                    table.string('nom').nullable();
                    table.string('puissance').nullable();
                    table.string('precision').nullable();
                    table.string('pp').nullable();
                    table.string('numéro').nullable();
                });
            });

    };

    // Insert Attaques
    let attaqueInsert = function() {
        let insertPromises = [];
        newAttaqueJson.forEach(function(attaque) {
        
        insertPromises.push(
            knex('attaque')
                .insert({
                    niveau : attaque["niveau"],
                    nom : attaque["nom"],
                    puissance : attaque["puissance"],
                    precision : attaque["precision"],
                    pp : attaque["pp"],
                    numéro : attaque["numéro"]
                })
        );
        });
    
        return Promise.all(insertPromises);
    };
    
    // Main flow
    pokemonTable()
        .then(function() {
            console.log('Table Pokemon created !');
        })
        .then(pokemonInsert)
        .then(function() {
            console.log('Pokemon inserts done');
        })
        .then(function() {
            console.log('This program end in 5 secondes')
            setTimeout(() => {
                process.exit(0)
            },5000)
        })
        .catch(function(error){
            console.log(error)
        });

    attaqueTable()
        .then(function() {
            console.log('Table Attaque created !')
        })
        .then(attaqueInsert)
        .then(function() {
            console.log('Attaque inserts done');
        })
        .then(function() {
            console.log('This program end in 5 secondes')
            setTimeout(() => {
                process.exit(0)
            },5000)
        })
        .catch(function(error){
            console.log(error);
        });
    
    fs.unlinkSync('./newPokedex.json')
    fs.unlinkSync('./attaques.json')
}

insertion()
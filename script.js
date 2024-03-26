const abilities = [
    { name: "\"Guard Dog\"", icon: "./StrategemIcons/Backpack/ballistic_guard_dog.png", type:"Backpack" },
    { name: "Ballistic Shield Backpack", icon: "./StrategemIcons/Backpack/ballistic_shield.png", type:"Backpack"},
    {name: "Jump Pack", icon: "./StrategemIcons/Backpack/jump_pack.png", type:"Backpack"},
    {name: "\"Guard Dog\" Rover", icon:"./StrategemIcons/Backpack/laser_guard_dog.png", type:"Backpack"},
    {name: "Shield Generator Pack", icon:"./StrategemIcons/Backpack/shield_generator.png", type:"Backpack"},
    {name: "Supply Pack", icon:"./StrategemIcons/Backpack/supply_pack.png", type:"Backpack"},
    {name: "Anti-Personnel Minefield", icon:"./StrategemIcons/Defensive/antipersonnel_mines.png", type:"Emplacement"},
    {name: "Autocannon Sentry", icon:"./StrategemIcons/Defensive/autocannon_turret.png", type:"Sentry"},
    {name: "EMS Mortar Sentry", icon:"./StrategemIcons/Defensive/ems_mortar_sentry.png", type:"Sentry"},
    {name: "Gatling Sentry", icon:"./StrategemIcons/Defensive/gatling_sentry.png", type:"Sentry"},
    {name: "HMG Emplacement", icon:"./StrategemIcons/Defensive/hmg_emplacement.png", type:"Emplacement"},
    {name: "Incendiary Mines", icon:"./StrategemIcons/Defensive/incendiary_mines.png", type:"Emplacement"},
    {name: "Machine Gun Sentry", icon:"./StrategemIcons/Defensive/mg_sentry.png", type:"Sentry"},
    {name: "Mortar Sentry", icon:"./StrategemIcons/Defensive/mortar_sentry.png", type:"Sentry"},
    {name: "Rocket Sentry", icon:"./StrategemIcons/Defensive/rocket_sentry.png", type:"Sentry"},
    {name: "Shield Generator Relay", icon:"./StrategemIcons/Defensive/shield_gen_relay.png", type:"Emplacement"},
    {name: "Tesla Tower", icon:"./StrategemIcons/Defensive/tesla_tower.png", type:"Emplacement"},
    {name: "Orbital 120MM HE Barrage", icon:"./StrategemIcons/Offensive/120mm_barrage.png", type:"Orbital"},
    {name: "Orbital 380MM HE Barrage", icon:"./StrategemIcons/Offensive/380mm_barrage.png", type:"Orbital"},
    {name: "Orbital Airburst Strike", icon:"./StrategemIcons/Offensive/airburst_strike.png", type:"Orbital"},
    {name: "Eagle 500KG Bomb", icon:"./StrategemIcons/Offensive/eagle_500kg.png", type:"Eagle"},
    {name: "Eagle Airstrike", icon:"./StrategemIcons/Offensive/eagle_airstrike.png", type:"Eagle"},
    {name: "Eagle Cluster Bomb", icon:"./StrategemIcons/Offensive/eagle_cluster.png", type:"Eagle"},
    {name: "Eagle Napalm Airstrike", icon:"./StrategemIcons/Offensive/eagle_napalm.png", type:"Eagle"},
    {name: "Eagle 110MM Rocket Pods", icon:"./StrategemIcons/Offensive/eagle_rocket_pods.png", type:"Eagle"},
    {name: "Eagle Smoke Strike", icon:"./StrategemIcons/Offensive/eagle_smoke.png", type:"Eagle"},
    {name: "Eagle Strafing Run", icon:"./StrategemIcons/Offensive/eagle_strafing.png", type:"Eagle"},
    {name: "Orbital EMS Strike", icon:"./StrategemIcons/Offensive/ems_strike.png", type:"Orbital"},
    {name: "Orbital Gas Strike", icon:"./StrategemIcons/Offensive/gas_strike.png", type:"Orbital"},
    {name: "Orbital Gatling Barrage", icon:"./StrategemIcons/Offensive/gatling_barrage.png", type:"Orbital"},
    {name: "Orbital Laser", icon:"./StrategemIcons/Offensive/orbital_laser.png", type:"Orbital"},
    {name: "Orbital Precision Strike", icon:"./StrategemIcons/Offensive/precision_strike.png", type:"Orbital"},
    {name: "Orbital Railcannon Strike", icon:"./StrategemIcons/Offensive/railcannon_strike.png", type:"Orbital"},
    {name: "Orbital Smoke Strike", icon:"./StrategemIcons/Offensive/smoke_strike.png", type:"Orbital"},
    {name: "Orbital Walking Barrage", icon:"./StrategemIcons/Offensive/walking_barrage.png", type:"Orbital"},
    {name: "Anti-Materiel Rifle", icon:"./StrategemIcons/Weapon/am_rifle.png", type:"Weapon"},
    {name: "Arc Thrower", icon:"./StrategemIcons/Weapon/arc_thrower.png", type:"Weapon"},
    {name: "Autocannon", icon:"./StrategemIcons/Weapon/autocannon.png", type:"Backpack_Weapon"},
    {name: "Expendable Anti-Tank", icon:"./StrategemIcons/Weapon/eat_it.png", type:"Weapon"},
    {name: "Flamethrower", icon:"./StrategemIcons/Weapon/flamethrower.png", type:"Weapon"},
    {name: "Grenade Launcher", icon:"./StrategemIcons/Weapon/grenade_launcher.png", type:"Weapon"},
    {name: "Laser Cannon", icon:"./StrategemIcons/Weapon/laser_cannon.png", type:"Weapon"},
    {name: "Machine Gun", icon:"./StrategemIcons/Weapon/machine_gun.png", type:"Weapon"},
    {name: "Railgun", icon:"./StrategemIcons/Weapon/railgun.png", type:"Weapon"},
    {name: "Recoilless Rifle", icon:"./StrategemIcons/Weapon/recoilless_rifle.png", type:"Backpack_Weapon"},
    {name: "Spear", icon:"./StrategemIcons/Weapon/spear.png", type:"Backpack_Weapon"},
    {name: "Stalwart", icon:"./StrategemIcons/Weapon/stalwart.png", type:"Weapon"},
    {name: "Exosuit", icon:"./StrategemIcons/Defensive/mech.png", type:"Mech"}

];

let selectedAbilitiesState = abilities.reduce((acc, ability) => {
    acc[ability.name] = true; // Initialize all abilities as selected
    return acc;
}, {});

document.addEventListener('DOMContentLoaded', function() {
    const abilitiesContainer = document.querySelector('.abilities-container');
    abilities.forEach(ability => {
        const abilityIcon = document.createElement('img');
        abilityIcon.src = ability.icon;
        abilityIcon.alt = ability.name;
        abilityIcon.classList.add('ability-icon', 'selected');
        abilityIcon.addEventListener('click', function() {
            selectedAbilitiesState[ability.name] = !selectedAbilitiesState[ability.name];
            abilityIcon.classList.toggle('selected');
            abilityIcon.classList.toggle('unselected');
        });
        abilitiesContainer.appendChild(abilityIcon);
    });
});

document.getElementById('generateButton').addEventListener('click', function() {
    const noMultiple = document.getElementById('noMultipleWeaponsBackpacks').checked;
    const availableAbilities = abilities.filter(ability => selectedAbilitiesState[ability.name]);
    let selectedAbilities = getRandomAbilities(availableAbilities, 4, noMultiple);
    displayAbilities(selectedAbilities);
});

function getRandomAbilities(abilities, count, noMultiple) {
    let shuffled = abilities.sort(() => 0.5 - Math.random());
    let result = [];
    if (noMultiple) {
        let weaponAdded = false;
        let backpackAdded = false;
        for( let ability of shuffled) {
            if(result.length >= count) break;
            if(ability.type === 'Weapon') {
                if(!weaponAdded) {
                    result.push(ability);
                    weaponAdded = true;
                }
            }
            else if(ability.type === 'Backpack') {
                if(!backpackAdded) {
                    result.push(ability);
                    backpackAdded = true;
                }
            }
            else if(ability.type === "Backpack_Weapon") {
                if(!backpackAdded && !weaponAdded) {
                    result.push(ability);
                    backpackAdded = true;
                    weaponAdded = true;
                }
            }
            else {
                result.push(ability);
            }
        }
        shuffled = shuffled.filter(ability => !result.includes(ability));
        while(result.length < count) {
            result.push(shuffled.shift());
        }
    }
    else { 
    return shuffled.slice(0, count);
    }
    return result;
}

function displayAbilities(abilities) {
    const container = document.getElementById('loadoutDisplay');
    container.innerHTML = ''; // Clear previous abilities
    abilities.forEach(ability => {
        const div = document.createElement('div');
        div.classList.add('icon');
        div.innerHTML = `<img src="${ability.icon}" alt="${ability.name}"><p>${ability.name}</p>`;
        container.appendChild(div);
    });
}

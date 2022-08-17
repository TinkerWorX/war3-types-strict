/** @noSelfInFile */

// ===============
// ==== TYPES ====
// ===============

// =================
// ==== GLOBALS ====
// =================
declare const ABOMINATION: number;
declare const ACOLYTE: number;
declare var ai_player: player | undefined;
declare var allow_air_creeps: boolean;
declare var allow_signal_abort: boolean;
declare const ANCIENT_LORE: number;
declare const ANCIENT_PROTECT: number;
declare const ANCIENT_WAR: number;
declare const ANCIENT_WIND: number;
declare const ANIM_DEAD: number;
declare const ARCANE_SANCTUM: number;
declare const ARCANE_TOWER: number;
declare const ARCANE_VAULT: number;
declare const ARCHER: number;
declare const ARCHMAGE: number;
declare const ATTACK_CAPTAIN: number;
declare const AVATAR: number;
declare const AVIARY: number;
declare const BALLISTA: number;
declare const BANISH: number;
declare const BANSHEE: number;
declare const BARRACKS: number;
declare const BASH: number;
declare const BATRIDER: number;
declare const BEAR_DEN: number;
declare const BERSERKER: number;
declare const BESTIARY: number;
declare const BLACKSMITH: number;
declare const BLADE_MASTER: number;
declare const BLADE_STORM: number;
declare const BLINK: number;
declare const BLIZZARD: number;
declare const BLK_SPHINX: number;
declare const BLOOD_MAGE: number;
declare const BLOOD_PEASANT: number;
declare const BLOOD_PRIEST: number;
declare const BLOOD_SORCERESS: number;
declare const BONEYARD: number;
declare const BOTH_CAPTAINS: number;
declare const BRILLIANCE_AURA: number;
declare var build_campaign_attackers: boolean;
declare const BUILD_EXPAND: number;
declare var build_item: Record<number, number>;
declare var build_length: number;
declare var build_qty: Record<number, number>;
declare var build_town: Record<number, number>;
declare var build_type: Record<number, number>;
declare const BUILD_UNIT: number;
declare const BUILD_UPGRADE: number;
declare const BURROW: number;
declare var campaign_basics_speed: number;
declare var campaign_gold_peons: number;
declare var campaign_wood_peons: number;
declare const CANNON_TOWER: number;
declare const CARRION_SCARAB: number;
declare const CARRION_SWARM: number;
declare const CASTLE: number;
declare const CATAPULT: number;
declare const CENARIUS: number;
declare const CHAIN_LIGHTNING: number;
declare const CHAOS_BLADEMASTER: number;
declare const CHAOS_BURROW: number;
declare const CHAOS_GROM: number;
declare const CHAOS_GRUNT: number;
declare const CHAOS_KODO: number;
declare const CHAOS_PEON: number;
declare const CHAOS_RAIDER: number;
declare const CHAOS_WARLOCK: number;
declare const CHIMAERA: number;
declare const CHIMAERA_ROOST: number;
declare const CHURCH: number;
declare const COPTER: number;
declare const CORRUPT_LIFE: number;
declare const CORRUPT_PROTECTOR: number;
declare const CORRUPT_TREANT: number;
declare const CORRUPT_WAR: number;
declare const CORRUPT_WELL: number;
declare const CRITICAL_STRIKE: number;
declare const CRYPT: number;
declare const CRYPT_FIEND: number;
declare const CRYPT_LORD: number;
declare const DAMNED_TEMPLE: number;
declare const DARK_RITUAL: number;
declare const DEATH_COIL: number;
declare const DEATH_DECAY: number;
declare const DEATH_KNIGHT: number;
declare const DEATH_PACT: number;
declare const DEFENSE_CAPTAIN: number;
declare var defense_length: number;
declare var defense_qty: Record<number, number>;
declare var defense_units: Record<number, number>;
declare const DEMON_GATE: number;
declare const DEMON_HUNTER: number;
declare const DEMON_HUNTER_M: number;
declare const DEN_OF_WONDERS: number;
declare const DETHEROC: number;
declare const DEVOTION_AURA: number;
declare var difficulty: number;
declare const DIVINE_SHIELD: number;
declare const DOOMGUARD: number;
declare var do_campaign_farms: boolean;
declare var do_debug_cheats: boolean;
declare const DRAGON_HAWK: number;
declare const DREAD_LORD: number;
declare const DRUID_CLAW: number;
declare const DRUID_CLAW_M: number;
declare const DRUID_TALON: number;
declare const DRUID_TALON_M: number;
declare const DRYAD: number;
declare const EARTHQUAKE: number;
declare const EASY: number;
declare const ELEMENTAL: number;
declare const ELF_ALTAR: number;
declare const ELF_FARM: number;
declare const ELF_GUARD_TOWER: number;
declare const ELF_HIGH_BARRACKS: number;
declare const ELF_MINE: number;
declare const ENDURANE_AURA: number;
declare const ENT: number;
declare const ENT_ROOTS: number;
declare const EVASION: number;
declare var exp_seen: number;
declare const FAERIE_DRAGON: number;
declare const FAN_KNIVES: number;
declare const FAR_SEER: number;
declare const FAR_SIGHT: number;
declare const FELLHOUND: number;
declare const FLAME_STRIKE: number;
declare const FOOTMAN: number;
declare const FOOTMEN: number;
declare const FORCE_NATURE: number;
declare const FORGE: number;
declare var form_group_timeouts: boolean;
declare const FORTRESS: number;
declare const FROST_ARMOR: number;
declare const FROST_NOVA: number;
declare const FROST_WYRM: number;
declare const FURBOLG: number;
declare const FURBOLG_CHAMP: number;
declare const FURBOLG_ELDER: number;
declare const FURBOLG_SHAMAN: number;
declare const FURBOLG_TRACKER: number;
declare const GARGOYLE: number;
declare const GARGOYLE_MORPH: number;
declare const GARG_SPIRE: number;
declare const GARITHOS: number;
declare var get_zeppelin: boolean;
declare const GHOUL: number;
declare var gold_buffer: number;
declare const GRAVEYARD: number;
declare const GREAT_HALL: number;
declare const GROM: number;
declare const GRUNT: number;
declare const GRYPHON: number;
declare const GUARDIAN: number;
declare const GUARD_TOWER: number;
declare const GYRO: number;
declare var harass_length: number;
declare var harass_max: Record<number, number>;
declare var harass_qty: Record<number, number>;
declare var harass_units: Record<number, number>;
declare const HARD: number;
declare var harvest_town1: boolean;
declare var harvest_town2: boolean;
declare var harvest_town3: boolean;
declare const HEAD_HUNTER: number;
declare const HEALING_WAVE: number;
declare const HELLCALLER: number;
declare var hero_id: number;
declare var hero_id2: number;
declare var hero_id3: number;
declare const HEX: number;
declare const HIGH_ARCHER: number;
declare const HIGH_EARTH: number;
declare const HIGH_FOOTMAN: number;
declare const HIGH_FOOTMEN: number;
declare const HIGH_SKY: number;
declare const HIGH_SWORDMAN: number;
declare const HIGH_TOWER: number;
declare const HIPPO: number;
declare const HIPPO_RIDER: number;
declare const HOLY_BOLT: number;
declare const HOUSE: number;
declare const HUMAN_ALTAR: number;
declare const HUMAN_DRAGON_HAWK: number;
declare const HUNTERS_HALL: number;
declare const HUNTRESS: number;
declare const ILLIDAN: number;
declare const ILLIDAN_DEMON: number;
declare const IMMOLATION: number;
declare const IMPALE: number;
declare const INFERNAL: number;
declare const INFERNO: number;
declare const INSANE: number;
declare const JAINA: number;
declare const KAEL: number;
declare const KEEP: number;
declare const KEEPER: number;
declare const KNIGHT: number;
declare const KODO_BEAST: number;
declare const LICH: number;
declare const LOCUST_SWARM: number;
declare const LODGE: number;
declare const LUMBER_MILL: number;
declare const M1: number;
declare const M10: number;
declare const M11: number;
declare const M12: number;
declare const M13: number;
declare const M14: number;
declare const M15: number;
declare const M2: number;
declare const M3: number;
declare const M4: number;
declare const M5: number;
declare const M6: number;
declare const M7: number;
declare const M8: number;
declare const M9: number;
declare const MAGE_TOWER: number;
declare const MAIEV: number;
declare const MALGANIS: number;
declare const MANA_BURN: number;
declare const MASS_TELEPORT: number;
declare var max_creeps: number;
declare var max_hero_level: number;
declare const MEAT_WAGON: number;
declare const MELEE_INSANE: number;
declare const MELEE_NEWBIE: number;
declare const MELEE_NORMAL: number;
declare const METAMORPHOSIS: number;
declare const MILITIA: number;
declare var min_creeps: number;
declare const MIRROR_IMAGE: number;
declare const MOON_BABE: number;
declare const MOON_CHICK: number;
declare const MOON_HONEY: number;
declare const MOON_WELL: number;
declare const MORTAR: number;
declare const MOUNTAIN_GIANT: number;
declare const MTN_KING: number;
declare const MURADIN: number;
declare const NAGA_ALTAR: number;
declare const NAGA_CORAL: number;
declare const NAGA_COUATL: number;
declare const NAGA_DRAGON: number;
declare const NAGA_GUARDIAN: number;
declare const NAGA_HYDRA: number;
declare const NAGA_MYRMIDON: number;
declare const NAGA_REAVER: number;
declare const NAGA_ROYAL: number;
declare const NAGA_SERPENT: number;
declare const NAGA_SHRINE: number;
declare const NAGA_SIREN: number;
declare const NAGA_SLAVE: number;
declare const NAGA_SNAP_DRAGON: number;
declare const NAGA_SORCERESS: number;
declare const NAGA_SPAWNING: number;
declare const NAGA_TEMPLE: number;
declare const NAGA_TURTLE: number;
declare const NAGA_VASHJ: number;
declare const NAGA_WITCH: number;
declare const NECRO: number;
declare const NECROPOLIS_1: number;
declare const NECROPOLIS_2: number;
declare const NECROPOLIS_3: number;
declare const NORMAL: number;
declare const OBSIDIAN_STATUE: number;
declare const OBS_STATUE: number;
declare const OGRE_MAGI: number;
declare const ORC_ALTAR: number;
declare const ORC_BARRACKS: number;
declare const ORC_DRAGON: number;
declare const ORC_WATCH_TOWER: number;
declare const PALADIN: number;
declare const PEASANT: number;
declare const PEON: number;
declare const PIG_FARM: number;
declare const PIT_FIEND: number;
declare const PIT_LORD: number;
declare const PLAGUE_TREANT: number;
declare const POISON_TREANT: number;
declare const PRIEST: number;
declare var racial_farm: number;
declare const RAIDER: number;
declare var ready_for_zeppelin: boolean;
declare const REINCARNATION: number;
declare const RESURRECTION: number;
declare const RIFLEMAN: number;
declare const RIFLEMEN: number;
declare const ROCKET_TANK: number;
declare const SAC_PIT: number;
declare const SANCTUM: number;
declare const SAPPER: number;
declare const SATYR: number;
declare const SCOUT: number;
declare const SEARING_ARROWS: number;
declare const SERPENT_WARD: number;
declare const SHADE: number;
declare const SHADOWDANCER: number;
declare const SHADOW_HUNTER: number;
declare const SHADOW_TOUCH: number;
declare const SHAMAN: number;
declare const SHANDRIS: number;
declare const SHOCKWAVE: number;
declare const SIPHON_MANA: number;
declare const SKEL_ARCHER: number;
declare const SKEL_BURNING: number;
declare const SKEL_GIANT: number;
declare const SKEL_MARKSMAN: number;
declare const SKEL_WARRIOR: number;
declare var skill: Record<number, number>;
declare var skills1: Record<number, number>;
declare var skills2: Record<number, number>;
declare var skills3: Record<number, number>;
declare const SLAUGHTERHOUSE: number;
declare const SLEEP: number;
declare var sleep_seconds: number;
declare const SORCERESS: number;
declare const SOULSTEALER: number;
declare const SPELL_BREAKER: number;
declare const SPIRIT_WALKER: number;
declare const SPIRIT_WALKER_M: number;
declare const SPIRIT_WOLF: number;
declare const STARFALL: number;
declare const STEAM_TANK: number;
declare const STRONGHOLD: number;
declare const SUMMON_PHOENIX: number;
declare const SYLVANUS: number;
declare var take_exp: boolean;
declare const TANK: number;
declare const TAUREN: number;
declare const TAUREN_CHIEF: number;
declare const THORNS_AURA: number;
declare const THORNY_SHIELD: number;
declare const THRALL: number;
declare const THUNDER_BOLT: number;
declare const THUNDER_CLAP: number;
declare const TICHONDRIUS: number;
declare const TOMB_OF_RELICS: number;
declare var total_gold: number;
declare var total_wood: number;
declare const TOTEM: number;
declare const TOWN_HALL: number;
declare var trace_on: boolean;
declare const TRANQUILITY: number;
declare const TREE_AGES: number;
declare const TREE_ETERNITY: number;
declare const TREE_LIFE: number;
declare const TRICKSTER: number;
declare const TRUESHOT: number;
declare var two_heroes: boolean;
declare const UNDEAD_ALTAR: number;
declare const UNDEAD_BARGE: number;
declare const UNDEAD_MINE: number;
declare const UNHOLY_AURA: number;
declare const UPG_ABOLISH: number;
declare const UPG_ABOM: number;
declare const UPG_ABOM_EXPL: number;
declare const UPG_ARMOR: number;
declare const UPG_ARTILLERY: number;
declare const UPG_BANSHEE: number;
declare const UPG_BLESSING: number;
declare const UPG_BLK_SPHINX: number;
declare const UPG_BOLT: number;
declare const UPG_BOMBS: number;
declare const UPG_BOWS: number;
declare const UPG_BREEDING: number;
declare const UPG_BURROWING: number;
declare const UPG_CANNIBALIZE: number;
declare const UPG_CHIM_ACID: number;
declare const UPG_CLOUD: number;
declare const UPG_CONT_MAGIC: number;
declare const UPG_CR_ARMOR: number;
declare const UPG_CR_ATTACK: number;
declare const UPG_DEFEND: number;
declare const UPG_DRUID_CLAW: number;
declare const UPG_DRUID_TALON: number;
declare const UPG_EXHUME: number;
declare const UPG_FIEND_WEB: number;
declare const UPG_FLAK: number;
declare const UPG_FRAGS: number;
declare const UPG_GHOUL_FRENZY: number;
declare const UPG_GLAIVE: number;
declare const UPG_GOLD: number;
declare const UPG_GUN_RANGE: number;
declare const UPG_HAMMERS: number;
declare const UPG_HARD_SKIN: number;
declare const UPG_HIDES: number;
declare const UPG_HIPPO_TAME: number;
declare const UPG_LEATHER: number;
declare const UPG_MARKSMAN: number;
declare const UPG_MARK_CLAW: number;
declare const UPG_MARK_TALON: number;
declare const UPG_MASONRY: number;
declare const UPG_MEAT_WAGON: number;
declare const UPG_MELEE: number;
declare const UPG_MOON_ARMOR: number;
declare const UPG_NAGA_ABOLISH: number;
declare const UPG_NAGA_ARMOR: number;
declare const UPG_NAGA_ATTACK: number;
declare const UPG_NAGA_ENSNARE: number;
declare const UPG_NECROS: number;
declare const UPG_ORC_ARMOR: number;
declare const UPG_ORC_ARTILLERY: number;
declare const UPG_ORC_BERSERK: number;
declare const UPG_ORC_BERSERKER: number;
declare const UPG_ORC_BURROWS: number;
declare const UPG_ORC_CHAOS: number;
declare const UPG_ORC_DOCS: number;
declare const UPG_ORC_ENSNARE: number;
declare const UPG_ORC_FIRE: number;
declare const UPG_ORC_MELEE: number;
declare const UPG_ORC_NAPTHA: number;
declare const UPG_ORC_PILLAGE: number;
declare const UPG_ORC_PULVERIZE: number;
declare const UPG_ORC_RANGED: number;
declare const UPG_ORC_REGEN: number;
declare const UPG_ORC_SHAMAN: number;
declare const UPG_ORC_SPIKES: number;
declare const UPG_ORC_SWALKER: number;
declare const UPG_ORC_VENOM: number;
declare const UPG_ORC_WAR_DRUMS: number;
declare const UPG_PLAGUE: number;
declare const UPG_PRAYING: number;
declare const UPG_RANGED: number;
declare const UPG_RESIST_SKIN: number;
declare const UPG_SACRIFICE: number;
declare const UPG_SCATTER: number;
declare const UPG_SCOUT: number;
declare const UPG_SENTINEL: number;
declare const UPG_SIGHT: number;
declare const UPG_SIREN: number;
declare const UPG_SKEL_LIFE: number;
declare const UPG_SKEL_MASTERY: number;
declare const UPG_SORCERY: number;
declare const UPG_STONE_FORM: number;
declare const UPG_STR_MOON: number;
declare const UPG_STR_WILD: number;
declare const UPG_TANK: number;
declare const UPG_ULTRAVISION: number;
declare const UPG_UNHOLY_ARMOR: number;
declare const UPG_UNHOLY_STR: number;
declare const UPG_WELL_SPRING: number;
declare const UPG_WOOD: number;
declare const UPG_WYRM_BREATH: number;
declare const UPKEEP_TIER1: number;
declare const UPKEEP_TIER2: number;
declare const VAMP_AURA: number;
declare const VENGEANCE: number;
declare const VOODOO: number;
declare const VOODOO_LOUNGE: number;
declare const W2_WARLOCK: number;
declare const WARDEN: number;
declare const WAR_STOMP: number;
declare const WATCH_TOWER: number;
declare const WATER_ELEMENTAL: number;
declare const WIND_WALK: number;
declare const WISP: number;
declare const WITCH_DOCTOR: number;
declare const WORKSHOP: number;
declare const WYVERN: number;
declare const ZEPPELIN: number;
declare const ZEPPLIN: number;
declare var zep_next_wave: boolean;
declare const ZIGGURAT_1: number;
declare const ZIGGURAT_2: number;
declare const ZIGGURAT_FROST: number;
declare const FOREST_TROLL: number;

// =================
// ==== NATIVES ====
// =================
declare function AddAssault(qty: number, id: number): boolean;

declare function AddDefenders(qty: number, id: number): boolean;

declare function AddGuardPost(id: number, x: number, y: number): void;

declare function AttackMoveKill(target: unit): void;

declare function AttackMoveXY(x: number, y: number): void;

declare function CaptainAtGoal(): boolean;

declare function CaptainAttack(x: number, y: number): void;

declare function CaptainGoHome(): void;

declare function CaptainGroupSize(): number;

declare function CaptainInCombat(attack_captain: boolean): boolean;

declare function CaptainIsEmpty(): boolean;

declare function CaptainIsFull(): boolean;

declare function CaptainIsHome(): boolean;

declare function CaptainReadiness(): number;

declare function CaptainReadinessHP(): number;

declare function CaptainReadinessMa(): number;

declare function CaptainRetreating(): boolean;

declare function CaptainVsPlayer(id: player): void;

declare function CaptainVsUnits(id: player): void;

declare function ClearCaptainTargets(): void;

declare function ClearHarvestAI(): void;

declare function CommandsWaiting(): number;

declare function ConvertUnits(qty: number, id: number): boolean;

declare function CreateCaptains(): void;

declare function CreepsOnMap(): boolean;

declare function DebugFI(str: string, val: number): void;

declare function DebugS(str: string): void;

declare function DebugUnitID(str: string, val: number): void;

declare function DisablePathing(): void;

declare function DisplayText(p: number, str: string): void;

declare function DisplayTextI(p: number, str: string, val: number): void;

declare function DisplayTextII(p: number, str: string, v1: number, v2: number): void;

declare function DisplayTextIII(p: number, str: string, v1: number, v2: number, v3: number): void;

declare function DoAiScriptDebug(): boolean;

declare function FillGuardPosts(): void;

declare function GetAiPlayer(): number;

declare function GetAllianceTarget(): unit | undefined;

declare function GetBuilding(p: player): unit | undefined;

declare function GetCreepCamp(min: number, max: number, flyers_ok: boolean): unit | undefined;

declare function GetEnemyBase(): unit | undefined;

declare function GetEnemyExpansion(): unit | undefined;

declare function GetEnemyPower(): number;

declare function GetExpansionFoe(): unit | undefined;

declare function GetExpansionPeon(): unit | undefined;

declare function GetExpansionX(): number;

declare function GetExpansionY(): number;

declare function GetGoldOwned(): number;

declare function GetHeroId(): number;

declare function GetHeroLevelAI(): number;

declare function GetLastCommand(): number;

declare function GetLastData(): number;

declare function GetMegaTarget(): unit | undefined;

declare function GetMinesOwned(): number;

declare function GetNextExpansion(): number;

declare function GetPlayerUnitTypeCount(p: player, unitid: number): number;

declare function GetTownUnitCount(id: number, tn: number, dn: boolean): number;

declare function GetUnitBuildTime(unitid: number): number;

declare function GetUnitCount(unitid: number): number;

declare function GetUnitCountDone(unitid: number): number;

declare function GetUnitGoldCost(unitid: number): number;

declare function GetUnitWoodCost(unitid: number): number;

declare function GetUpgradeGoldCost(id: number): number;

declare function GetUpgradeLevel(id: number): number;

declare function GetUpgradeWoodCost(id: number): number;

declare function GroupTimedLife(allow: boolean): void;

declare function HarvestGold(town: number, peons: number): void;

declare function HarvestWood(town: number, peons: number): void;

declare function IgnoredUnits(unitid: number): number;

declare function InitAssault(): void;

declare function IsTowered(target: unit): boolean;

declare function LoadZepWave(x: number, y: number): void;

declare function MeleeDifficulty(): number;

declare function MergeUnits(qty: number, a: number, b: number, make: number): boolean;

declare function PopLastCommand(): void;

declare function PurchaseZeppelin(): void;

declare function RemoveInjuries(): void;

declare function RemoveSiege(): void;

declare function ResetCaptainLocs(): void;

declare function ReturnGuardPosts(): void;

declare function SetAllianceTarget(id: unit): void;

declare function SetAmphibious(): void;

declare function SetCampaignAI(): void;

declare function SetCaptainChanges(allow: boolean): void;

declare function SetCaptainHome(which: number, x: number, y: number): void;

declare function SetDefendPlayer(state: boolean): void;

declare function SetExpansion(peon: unit, id: number): boolean;

declare function SetGroupsFlee(state: boolean): void;

declare function SetHeroesBuyItems(state: boolean): void;

declare function SetHeroesFlee(state: boolean): void;

declare function SetHeroesTakeItems(state: boolean): void;

declare function SetHeroLevels(func: () => void): void;

declare function SetIgnoreInjured(state: boolean): void;

declare function SetMeleeAI(): void;

declare function SetNewHeroes(state: boolean): void;

declare function SetPeonsRepair(state: boolean): void;

declare function SetProduce(qty: number, id: number, town: number): boolean;

declare function SetRandomPaths(state: boolean): void;

declare function SetReplacementCount(qty: number): void;

declare function SetSlowChopping(state: boolean): void;

declare function SetSmartArtillery(state: boolean): void;

declare function SetStagePoint(x: number, y: number): void;

declare function SetTargetHeroes(state: boolean): void;

declare function SetUnitsFlee(state: boolean): void;

declare function SetUpgrade(id: number): boolean;

declare function SetWatchMegaTargets(state: boolean): void;

declare function ShiftTownSpot(x: number, y: number): void;

declare function Sleep(seconds: number): void;

declare function StartGetEnemyBase(): void;

declare function StartThread(func: () => void): void;

declare function StopGathering(): void;

declare function SuicidePlayer(id: player, check_full: boolean): boolean;

declare function SuicidePlayerUnits(id: player, check_full: boolean): boolean;

declare function SuicideUnit(count: number, unitid: number): void;

declare function SuicideUnitEx(ct: number, uid: number, pid: number): void;

declare function TeleportCaptain(x: number, y: number): void;

declare function TownHasHall(townid: number): boolean;

declare function TownHasMine(townid: number): boolean;

declare function TownThreatened(): boolean;

declare function TownWithMine(): number;

declare function UnitAlive(id: unit): boolean;

declare function UnitInvis(id: unit): boolean;

declare function Unsummon(unitid: unit): void;

declare function WaitGetEnemyBase(): boolean;

// ===================
// ==== FUNCTIONS ====
// ===================
declare function AddSiege(): void;
declare function AddSleepSeconds(seconds: number): void;
declare function AnyPlayerAttack(): void;
declare function AttackMoveKillA(target: unit): void;
declare function AttackMoveXYA(x: number, y: number): void;
declare function AwaitMeleeHeroes(): void;
declare function BasicExpansion(build_it: boolean, unitid: number): void;
declare function BuildAttackers(): void;
declare function BuildDefenders(): void;
declare function BuildFactory(unitid: number): void;
declare function BuildLoop(): void;
declare function CampaignAI(farms: number, heroes: () => void): void;
declare function CampaignAttacker(level: number, qty: number, unitid: number): void;
declare function CampaignAttackerEx(easy: number, med: number, hard: number, unitid: number): void;
declare function CampaignBasics(): void;
declare function CampaignBasicsA(): void;
declare function CampaignDefender(level: number, qty: number, unitid: number): void;
declare function CampaignDefenderEx(easy: number, med: number, hard: number, unitid: number): void;
declare function CommonSleepUntilTargetDead(target: unit, reform: boolean): void;
declare function CommonSuicideOnPlayer(standard: boolean, bldgs: boolean, seconds: number, p: player, x: number, y: number): void;
declare function Conversions(desire: number, unitid: number): void;
declare function ConvertNeeds(unitid: number): void;
declare function CreepAttackEx(): void;
declare function DoCampaignFarms(state: boolean): void;
declare function ExpansionAttack(): void;
declare function FoodAvail(base: number): number;
declare function FoodCap(): number;
declare function FoodPool(food: number, weak: boolean, id1: number, use1: number, strong: boolean, id2: number, use2: number): void;
declare function FoodSpace(): number;
declare function FoodUsed(): number;
declare function ForeverSuicideOnPlayer(seconds: number, p: player): void;
declare function FormGroup(seconds: number, testReady: boolean): void;
declare function GetAllyCount(whichPlayer: player): number;
declare function GetGold(): number;
declare function GetMajorCreep(): unit | undefined;
declare function GetMinorCreep(): unit | undefined;
declare function GetUnitCountEx(unitid: number, only_done: boolean, townid: number): number;
declare function GetWood(): number;
declare function GetZeppelin(): void;
declare function GuardSecondary(townid: number, qty: number, unitid: number): void;
declare function HallsCompleted(unitid: number): boolean;
declare function InitAI(): void;
declare function InitAssaultGroup(): void;
declare function InitBuildArray(): void;
declare function InitDefenseGroup(): void;
declare function InitMeleeGroup(): void;
declare function Interleave3(e1: number, m1: number, h1: number, u1: number, e2: number, m2: number, h2: number, u2: number, e3: number, m3: number, h3: number, u3: number): void;
declare function MajorCreepAttack(): void;
declare function Max(A: number, B: number): number;
declare function MeleeTownHall(townid: number, unitid: number): void;
declare function Min(A: number, B: number): number;
declare function MinorCreepAttack(): void;
declare function OneBuildLoop(): void;
declare function PickMeleeHero(raceid: race): number;
declare function PlayerEx(slot: number): player | undefined;
declare function PlayGame(): void;
declare function PrepFullSuicide(): void;
declare function PrepSuicideOnPlayer(seconds: number): boolean;
declare function PrepTime(): number;
declare function ReformUntilTargetDead(target: unit): void;
declare function SecondaryTown(town: number, qty: number, unitid: number): void;
declare function SecTown(town: number, qty: number, unitid: number): void;
declare function SetAssaultGroup(qty: number, max: number, unitid: number): void;
declare function SetBuildAll(t: number, qty: number, unitid: number, town: number): void;
declare function SetBuildExpa(qty: number, unitid: number): void;
declare function SetBuildNext(qty: number, unitid: number): void;
declare function SetBuildUnit(qty: number, unitid: number): void;
declare function SetBuildUnitEx(easy: number, med: number, hard: number, unitid: number): void;
declare function SetBuildUpgr(qty: number, unitid: number): void;
declare function SetBuildUpgrEx(easy: number, med: number, hard: number, unitid: number): void;
declare function SetFormGroupTimeouts(state: boolean): void;
declare function SetGoldPeons(count: number): void;
declare function SetHarvestLumber(harvest: boolean): void;
declare function SetInitialWave(seconds: number): void;
declare function SetMeleeGroup(unitid: number): void;
declare function SetReplacements(easy: number, med: number, hard: number): void;
declare function SetSkillArray(index: number, id: number): void;
declare function SetWoodPeons(count: number): void;
declare function SetZepNextWave(): void;
declare function SingleMeleeAttack(needs_exp: boolean, has_siege: boolean, major_ok: boolean, air_units: boolean): void;
declare function SkillArrays(): number;
declare function SleepForever(): void;
declare function SleepInCombat(): void;
declare function SleepUntilAtGoal(): void;
declare function SleepUntilTargetDead(target: unit): void;
declare function StaggerSleep(base: number, spread: number): void;
declare function StandardAI(heroes: () => void, peons: () => void, attacks: () => void): void;
declare function StartBuildLoop(): void;
declare function StartExpansion(qty: number, hall: number): boolean;
declare function StartTownBuilder(func: () => void): void;
declare function StartUnit(ask_qty: number, unitid: number, town: number): boolean;
declare function StartUpgrade(level: number, upgid: number): boolean;
declare function SuicideOnce(easy: number, med: number, hard: number, unitid: number): void;
declare function SuicideOnPlayer(seconds: number, p: player): void;
declare function SuicideOnPlayerEx(easy: number, med: number, hard: number, p: player): void;
declare function SuicideOnPlayerWave(): void;
declare function SuicideOnPoint(seconds: number, p: player, x: number, y: number): void;
declare function SuicideOnPointEx(easy: number, med: number, hard: number, p: player, x: number, y: number): void;
declare function SuicideOnUnits(seconds: number, p: player): void;
declare function SuicideOnUnitsEx(easy: number, med: number, hard: number, p: player): void;
declare function SuicideSleep(seconds: number): void;
declare function SuicideUnitA(unitid: number): void;
declare function SuicideUnitB(unitid: number, playerid: number): void;
declare function SuicideUnits(u1: number, u2: number, u3: number, u4: number, u5: number, u6: number, u7: number, u8: number, u9: number, uA: number): void;
declare function SuicideUnitsEx(playerid: number, u1: number, u2: number, u3: number, u4: number, u5: number, u6: number, u7: number, u8: number, u9: number, uA: number): void;
declare function SuicideUntilSignal(seconds: number, p: player): void;
declare function TownCount(base: number): number;
declare function TownCountDone(base: number): number;
declare function TownCountEx(unitid: number, only_done: boolean, townid: number): number;
declare function TownCountTown(base: number, townid: number): number;
declare function Trace(message: string): void;
declare function TraceI(message: string, val: number): void;
declare function TraceII(message: string, v1: number, v2: number): void;
declare function TraceIII(message: string, v1: number, v2: number, v3: number): void;
declare function UnsummonAll(): void;
declare function UpgradeAll(baseid: number, newid: number): void;
declare function WaitForSignal(): number;
declare function WaitForTown(towns: number, townid: number): void;
declare function WaitForUnits(unitid: number, qty: number): void;
declare function WavePrepare(unitid: number): number;

/** @noSelfInFile */

// ===============
// ==== TYPES ====
// ===============
declare interface ability extends agent { __ability: never; }
declare interface agent extends handle { __agent: never; }
declare interface aidifficulty extends handle { __aidifficulty: never; }
declare interface alliancetype extends handle { __alliancetype: never; }
declare interface attacktype extends handle { __attacktype: never; }
declare interface blendmode extends handle { __blendmode: never; }
declare interface boolexpr extends agent { __boolexpr: never; }
declare interface buff extends ability { __buff: never; }
declare interface button extends agent { __button: never; }
declare interface camerafield extends handle { __camerafield: never; }
declare interface camerasetup extends handle { __camerasetup: never; }
declare interface conditionfunc extends boolexpr { __conditionfunc: never; }
declare interface damagetype extends handle { __damagetype: never; }
declare interface defeatcondition extends agent { __defeatcondition: never; }
declare interface destructable extends widget { __destructable: never; }
declare interface dialog extends agent { __dialog: never; }
declare interface dialogevent extends eventid { __dialogevent: never; }
declare interface effect extends agent { __effect: never; }
declare interface effecttype extends handle { __effecttype: never; }
declare interface event extends agent { __event: never; }
declare interface eventid extends handle { __eventid: never; }
declare interface fgamestate extends gamestate { __fgamestate: never; }
declare interface filterfunc extends boolexpr { __filterfunc: never; }
declare interface fogmodifier extends agent { __fogmodifier: never; }
declare interface fogstate extends handle { __fogstate: never; }
declare interface force extends agent { __force: never; }
declare interface gamecache extends agent { __gamecache: never; }
declare interface gamedifficulty extends handle { __gamedifficulty: never; }
declare interface gameevent extends eventid { __gameevent: never; }
declare interface gamespeed extends handle { __gamespeed: never; }
declare interface gamestate extends handle { __gamestate: never; }
declare interface gametype extends handle { __gametype: never; }
declare interface group extends agent { __group: never; }
declare interface hashtable extends agent { __hashtable: never; }
declare interface igamestate extends gamestate { __igamestate: never; }
declare interface image extends handle { __image: never; }
declare interface item extends widget { __item: never; }
declare interface itempool extends handle { __itempool: never; }
declare interface itemtype extends handle { __itemtype: never; }
declare interface leaderboard extends agent { __leaderboard: never; }
declare interface lightning extends handle { __lightning: never; }
declare interface limitop extends eventid { __limitop: never; }
declare interface location extends agent { __location: never; }
declare interface mapcontrol extends handle { __mapcontrol: never; }
declare interface mapdensity extends handle { __mapdensity: never; }
declare interface mapflag extends handle { __mapflag: never; }
declare interface mapsetting extends handle { __mapsetting: never; }
declare interface mapvisibility extends handle { __mapvisibility: never; }
declare interface mousebuttontype extends handle { __mousebuttontype: never; }
declare interface multiboard extends agent { __multiboard: never; }
declare interface multiboarditem extends agent { __multiboarditem: never; }
declare interface pathingtype extends handle { __pathingtype: never; }
declare interface placement extends handle { __placement: never; }
declare interface player extends agent { __player: never; }
declare interface playercolor extends handle { __playercolor: never; }
declare interface playerevent extends eventid { __playerevent: never; }
declare interface playergameresult extends handle { __playergameresult: never; }
declare interface playerscore extends handle { __playerscore: never; }
declare interface playerslotstate extends handle { __playerslotstate: never; }
declare interface playerstate extends handle { __playerstate: never; }
declare interface playerunitevent extends eventid { __playerunitevent: never; }
declare interface quest extends agent { __quest: never; }
declare interface questitem extends agent { __questitem: never; }
declare interface race extends handle { __race: never; }
declare interface racepreference extends handle { __racepreference: never; }
declare interface raritycontrol extends handle { __raritycontrol: never; }
declare interface rect extends agent { __rect: never; }
declare interface region extends agent { __region: never; }
declare interface sound extends agent { __sound: never; }
declare interface soundtype extends handle { __soundtype: never; }
declare interface startlocprio extends handle { __startlocprio: never; }
declare interface terraindeformation extends handle { __terraindeformation: never; }
declare interface texmapflags extends handle { __texmapflags: never; }
declare interface texttag extends handle { __texttag: never; }
declare interface timer extends agent { __timer: never; }
declare interface timerdialog extends agent { __timerdialog: never; }
declare interface trackable extends agent { __trackable: never; }
declare interface trigger extends agent { __trigger: never; }
declare interface triggeraction extends handle { __triggeraction: never; }
declare interface triggercondition extends agent { __triggercondition: never; }
declare interface ubersplat extends handle { __ubersplat: never; }
declare interface unit extends widget { __unit: never; }
declare interface unitevent extends eventid { __unitevent: never; }
declare interface unitpool extends handle { __unitpool: never; }
declare interface unitstate extends handle { __unitstate: never; }
declare interface unittype extends handle { __unittype: never; }
declare interface version extends handle { __version: never; }
declare interface volumegroup extends handle { __volumegroup: never; }
declare interface weapontype extends handle { __weapontype: never; }
declare interface weathereffect extends handle { __weathereffect: never; }
declare interface widget extends agent { __widget: never; }
declare interface widgetevent extends eventid { __widgetevent: never; }

// =================
// ==== GLOBALS ====
// =================
declare const AI_DIFFICULTY_INSANE: aidifficulty;
declare const AI_DIFFICULTY_NEWBIE: aidifficulty;
declare const AI_DIFFICULTY_NORMAL: aidifficulty;
declare const ALLIANCE_HELP_REQUEST: alliancetype;
declare const ALLIANCE_HELP_RESPONSE: alliancetype;
declare const ALLIANCE_PASSIVE: alliancetype;
declare const ALLIANCE_RESCUABLE: alliancetype;
declare const ALLIANCE_SHARED_ADVANCED_CONTROL: alliancetype;
declare const ALLIANCE_SHARED_CONTROL: alliancetype;
declare const ALLIANCE_SHARED_SPELLS: alliancetype;
declare const ALLIANCE_SHARED_VISION: alliancetype;
declare const ALLIANCE_SHARED_VISION_FORCED: alliancetype;
declare const ALLIANCE_SHARED_XP: alliancetype;
declare const ATTACK_TYPE_CHAOS: attacktype;
declare const ATTACK_TYPE_HERO: attacktype;
declare const ATTACK_TYPE_MAGIC: attacktype;
declare const ATTACK_TYPE_MELEE: attacktype;
declare const ATTACK_TYPE_NORMAL: attacktype;
declare const ATTACK_TYPE_PIERCE: attacktype;
declare const ATTACK_TYPE_SIEGE: attacktype;
declare const BLEND_MODE_ADDITIVE: blendmode;
declare const BLEND_MODE_BLEND: blendmode;
declare const BLEND_MODE_DONT_CARE: blendmode;
declare const BLEND_MODE_KEYALPHA: blendmode;
declare const BLEND_MODE_MODULATE: blendmode;
declare const BLEND_MODE_MODULATE_2X: blendmode;
declare const BLEND_MODE_NONE: blendmode;
declare const CAMERA_FIELD_ANGLE_OF_ATTACK: camerafield;
declare const CAMERA_FIELD_FARZ: camerafield;
declare const CAMERA_FIELD_FIELD_OF_VIEW: camerafield;
declare const CAMERA_FIELD_ROLL: camerafield;
declare const CAMERA_FIELD_ROTATION: camerafield;
declare const CAMERA_FIELD_TARGET_DISTANCE: camerafield;
declare const CAMERA_FIELD_ZOFFSET: camerafield;
declare const CAMERA_MARGIN_BOTTOM: number;
declare const CAMERA_MARGIN_LEFT: number;
declare const CAMERA_MARGIN_RIGHT: number;
declare const CAMERA_MARGIN_TOP: number;
declare const DAMAGE_TYPE_ACID: damagetype;
declare const DAMAGE_TYPE_COLD: damagetype;
declare const DAMAGE_TYPE_DEATH: damagetype;
declare const DAMAGE_TYPE_DEFENSIVE: damagetype;
declare const DAMAGE_TYPE_DEMOLITION: damagetype;
declare const DAMAGE_TYPE_DISEASE: damagetype;
declare const DAMAGE_TYPE_DIVINE: damagetype;
declare const DAMAGE_TYPE_ENHANCED: damagetype;
declare const DAMAGE_TYPE_FIRE: damagetype;
declare const DAMAGE_TYPE_FORCE: damagetype;
declare const DAMAGE_TYPE_LIGHTNING: damagetype;
declare const DAMAGE_TYPE_MAGIC: damagetype;
declare const DAMAGE_TYPE_MIND: damagetype;
declare const DAMAGE_TYPE_NORMAL: damagetype;
declare const DAMAGE_TYPE_PLANT: damagetype;
declare const DAMAGE_TYPE_POISON: damagetype;
declare const DAMAGE_TYPE_SHADOW_STRIKE: damagetype;
declare const DAMAGE_TYPE_SLOW_POISON: damagetype;
declare const DAMAGE_TYPE_SONIC: damagetype;
declare const DAMAGE_TYPE_SPIRIT_LINK: damagetype;
declare const DAMAGE_TYPE_UNIVERSAL: damagetype;
declare const DAMAGE_TYPE_UNKNOWN: damagetype;
declare const EFFECT_TYPE_AREA_EFFECT: effecttype;
declare const EFFECT_TYPE_CASTER: effecttype;
declare const EFFECT_TYPE_EFFECT: effecttype;
declare const EFFECT_TYPE_LIGHTNING: effecttype;
declare const EFFECT_TYPE_MISSILE: effecttype;
declare const EFFECT_TYPE_SPECIAL: effecttype;
declare const EFFECT_TYPE_TARGET: effecttype;
declare const EQUAL: limitop;
declare const EVENT_DIALOG_BUTTON_CLICK: dialogevent;
declare const EVENT_DIALOG_CLICK: dialogevent;
declare const EVENT_GAME_BUILD_SUBMENU: gameevent;
declare const EVENT_GAME_CUSTOM_UI_FRAME: gameevent;
declare const EVENT_GAME_END_LEVEL: gameevent;
declare const EVENT_GAME_ENTER_REGION: gameevent;
declare const EVENT_GAME_LEAVE_REGION: gameevent;
declare const EVENT_GAME_LOADED: gameevent;
declare const EVENT_GAME_SAVE: gameevent;
declare const EVENT_GAME_SHOW_SKILL: gameevent;
declare const EVENT_GAME_STATE_LIMIT: gameevent;
declare const EVENT_GAME_TIMER_EXPIRED: gameevent;
declare const EVENT_GAME_TOURNAMENT_FINISH_NOW: gameevent;
declare const EVENT_GAME_TOURNAMENT_FINISH_SOON: gameevent;
declare const EVENT_GAME_TRACKABLE_HIT: gameevent;
declare const EVENT_GAME_TRACKABLE_TRACK: gameevent;
declare const EVENT_GAME_VARIABLE_LIMIT: gameevent;
declare const EVENT_GAME_VICTORY: gameevent;
declare const EVENT_PLAYER_ALLIANCE_CHANGED: playerevent;
declare const EVENT_PLAYER_ARROW_DOWN_DOWN: playerevent;
declare const EVENT_PLAYER_ARROW_DOWN_UP: playerevent;
declare const EVENT_PLAYER_ARROW_LEFT_DOWN: playerevent;
declare const EVENT_PLAYER_ARROW_LEFT_UP: playerevent;
declare const EVENT_PLAYER_ARROW_RIGHT_DOWN: playerevent;
declare const EVENT_PLAYER_ARROW_RIGHT_UP: playerevent;
declare const EVENT_PLAYER_ARROW_UP_DOWN: playerevent;
declare const EVENT_PLAYER_ARROW_UP_UP: playerevent;
declare const EVENT_PLAYER_CHAT: playerevent;
declare const EVENT_PLAYER_DEFEAT: playerevent;
declare const EVENT_PLAYER_END_CINEMATIC: playerevent;
declare const EVENT_PLAYER_HERO_LEVEL: playerunitevent;
declare const EVENT_PLAYER_HERO_REVIVABLE: playerunitevent;
declare const EVENT_PLAYER_HERO_REVIVE_CANCEL: playerunitevent;
declare const EVENT_PLAYER_HERO_REVIVE_FINISH: playerunitevent;
declare const EVENT_PLAYER_HERO_REVIVE_START: playerunitevent;
declare const EVENT_PLAYER_HERO_SKILL: playerunitevent;
declare const EVENT_PLAYER_LEAVE: playerevent;
declare const EVENT_PLAYER_MOUSE_DOWN: playerevent;
declare const EVENT_PLAYER_MOUSE_MOVE: playerevent;
declare const EVENT_PLAYER_MOUSE_UP: playerevent;
declare const EVENT_PLAYER_STATE_LIMIT: playerevent;
declare const EVENT_PLAYER_UNIT_ATTACKED: playerunitevent;
declare const EVENT_PLAYER_UNIT_CHANGE_OWNER: playerunitevent;
declare const EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL: playerunitevent;
declare const EVENT_PLAYER_UNIT_CONSTRUCT_FINISH: playerunitevent;
declare const EVENT_PLAYER_UNIT_CONSTRUCT_START: playerunitevent;
declare const EVENT_PLAYER_UNIT_DEATH: playerunitevent;
declare const EVENT_PLAYER_UNIT_DECAY: playerunitevent;
declare const EVENT_PLAYER_UNIT_DESELECTED: playerunitevent;
declare const EVENT_PLAYER_UNIT_DETECTED: playerunitevent;
declare const EVENT_PLAYER_UNIT_DROP_ITEM: playerunitevent;
declare const EVENT_PLAYER_UNIT_HIDDEN: playerunitevent;
declare const EVENT_PLAYER_UNIT_ISSUED_ORDER: playerunitevent;
declare const EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER: playerunitevent;
declare const EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER: playerunitevent;
declare const EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER: playerunitevent;
declare const EVENT_PLAYER_UNIT_LOADED: playerunitevent;
declare const EVENT_PLAYER_UNIT_PAWN_ITEM: playerunitevent;
declare const EVENT_PLAYER_UNIT_PICKUP_ITEM: playerunitevent;
declare const EVENT_PLAYER_UNIT_RESCUED: playerunitevent;
declare const EVENT_PLAYER_UNIT_RESEARCH_CANCEL: playerunitevent;
declare const EVENT_PLAYER_UNIT_RESEARCH_FINISH: playerunitevent;
declare const EVENT_PLAYER_UNIT_RESEARCH_START: playerunitevent;
declare const EVENT_PLAYER_UNIT_SELECTED: playerunitevent;
declare const EVENT_PLAYER_UNIT_SELL: playerunitevent;
declare const EVENT_PLAYER_UNIT_SELL_ITEM: playerunitevent;
declare const EVENT_PLAYER_UNIT_SPELL_CAST: playerunitevent;
declare const EVENT_PLAYER_UNIT_SPELL_CHANNEL: playerunitevent;
declare const EVENT_PLAYER_UNIT_SPELL_EFFECT: playerunitevent;
declare const EVENT_PLAYER_UNIT_SPELL_ENDCAST: playerunitevent;
declare const EVENT_PLAYER_UNIT_SPELL_FINISH: playerunitevent;
declare const EVENT_PLAYER_UNIT_SUMMON: playerunitevent;
declare const EVENT_PLAYER_UNIT_TRAIN_CANCEL: playerunitevent;
declare const EVENT_PLAYER_UNIT_TRAIN_FINISH: playerunitevent;
declare const EVENT_PLAYER_UNIT_TRAIN_START: playerunitevent;
declare const EVENT_PLAYER_UNIT_UPGRADE_CANCEL: playerunitevent;
declare const EVENT_PLAYER_UNIT_UPGRADE_FINISH: playerunitevent;
declare const EVENT_PLAYER_UNIT_UPGRADE_START: playerunitevent;
declare const EVENT_PLAYER_UNIT_USE_ITEM: playerunitevent;
declare const EVENT_PLAYER_VICTORY: playerevent;
declare const EVENT_UNIT_ACQUIRED_TARGET: unitevent;
declare const EVENT_UNIT_ATTACKED: unitevent;
declare const EVENT_UNIT_CHANGE_OWNER: unitevent;
declare const EVENT_UNIT_CONSTRUCT_CANCEL: unitevent;
declare const EVENT_UNIT_CONSTRUCT_FINISH: unitevent;
declare const EVENT_UNIT_DAMAGED: unitevent;
declare const EVENT_UNIT_DEATH: unitevent;
declare const EVENT_UNIT_DECAY: unitevent;
declare const EVENT_UNIT_DESELECTED: unitevent;
declare const EVENT_UNIT_DETECTED: unitevent;
declare const EVENT_UNIT_DROP_ITEM: unitevent;
declare const EVENT_UNIT_HERO_LEVEL: unitevent;
declare const EVENT_UNIT_HERO_REVIVABLE: unitevent;
declare const EVENT_UNIT_HERO_REVIVE_CANCEL: unitevent;
declare const EVENT_UNIT_HERO_REVIVE_FINISH: unitevent;
declare const EVENT_UNIT_HERO_REVIVE_START: unitevent;
declare const EVENT_UNIT_HERO_SKILL: unitevent;
declare const EVENT_UNIT_HIDDEN: unitevent;
declare const EVENT_UNIT_ISSUED_ORDER: unitevent;
declare const EVENT_UNIT_ISSUED_POINT_ORDER: unitevent;
declare const EVENT_UNIT_ISSUED_TARGET_ORDER: unitevent;
declare const EVENT_UNIT_LOADED: unitevent;
declare const EVENT_UNIT_PAWN_ITEM: unitevent;
declare const EVENT_UNIT_PICKUP_ITEM: unitevent;
declare const EVENT_UNIT_RESCUED: unitevent;
declare const EVENT_UNIT_RESEARCH_CANCEL: unitevent;
declare const EVENT_UNIT_RESEARCH_FINISH: unitevent;
declare const EVENT_UNIT_RESEARCH_START: unitevent;
declare const EVENT_UNIT_SELECTED: unitevent;
declare const EVENT_UNIT_SELL: unitevent;
declare const EVENT_UNIT_SELL_ITEM: unitevent;
declare const EVENT_UNIT_SPELL_CAST: unitevent;
declare const EVENT_UNIT_SPELL_CHANNEL: unitevent;
declare const EVENT_UNIT_SPELL_EFFECT: unitevent;
declare const EVENT_UNIT_SPELL_ENDCAST: unitevent;
declare const EVENT_UNIT_SPELL_FINISH: unitevent;
declare const EVENT_UNIT_STATE_LIMIT: unitevent;
declare const EVENT_UNIT_SUMMON: unitevent;
declare const EVENT_UNIT_TARGET_IN_RANGE: unitevent;
declare const EVENT_UNIT_TRAIN_CANCEL: unitevent;
declare const EVENT_UNIT_TRAIN_FINISH: unitevent;
declare const EVENT_UNIT_TRAIN_START: unitevent;
declare const EVENT_UNIT_UPGRADE_CANCEL: unitevent;
declare const EVENT_UNIT_UPGRADE_FINISH: unitevent;
declare const EVENT_UNIT_UPGRADE_START: unitevent;
declare const EVENT_UNIT_USE_ITEM: unitevent;
declare const EVENT_WIDGET_DEATH: widgetevent;
declare const FALSE: boolean;
declare const FOG_OF_WAR_FOGGED: fogstate;
declare const FOG_OF_WAR_MASKED: fogstate;
declare const FOG_OF_WAR_VISIBLE: fogstate;
declare const GAME_STATE_DISCONNECTED: igamestate;
declare const GAME_STATE_DIVINE_INTERVENTION: igamestate;
declare const GAME_STATE_TIME_OF_DAY: fgamestate;
declare const GAME_TYPE_BLIZ: gametype;
declare const GAME_TYPE_FFA: gametype;
declare const GAME_TYPE_FOUR_TEAM_PLAY: gametype;
declare const GAME_TYPE_MELEE: gametype;
declare const GAME_TYPE_ONE_ON_ONE: gametype;
declare const GAME_TYPE_THREE_TEAM_PLAY: gametype;
declare const GAME_TYPE_TWO_TEAM_PLAY: gametype;
declare const GAME_TYPE_USE_MAP_SETTINGS: gametype;
declare const GREATER_THAN: limitop;
declare const GREATER_THAN_OR_EQUAL: limitop;
declare const ITEM_TYPE_ANY: itemtype;
declare const ITEM_TYPE_ARTIFACT: itemtype;
declare const ITEM_TYPE_CAMPAIGN: itemtype;
declare const ITEM_TYPE_CHARGED: itemtype;
declare const ITEM_TYPE_MISCELLANEOUS: itemtype;
declare const ITEM_TYPE_PERMANENT: itemtype;
declare const ITEM_TYPE_POWERUP: itemtype;
declare const ITEM_TYPE_PURCHASABLE: itemtype;
declare const ITEM_TYPE_TOME: itemtype;
declare const ITEM_TYPE_UNKNOWN: itemtype;
declare const JASS_MAX_ARRAY_SIZE: number;
declare const LESS_THAN: limitop;
declare const LESS_THAN_OR_EQUAL: limitop;
declare const MAP_ALLIANCE_CHANGES_HIDDEN: mapflag;
declare const MAP_CHEATS: mapflag;
declare const MAP_CHEATS_HIDDEN: mapflag;
declare const MAP_CONTROL_COMPUTER: mapcontrol;
declare const MAP_CONTROL_CREEP: mapcontrol;
declare const MAP_CONTROL_NEUTRAL: mapcontrol;
declare const MAP_CONTROL_NONE: mapcontrol;
declare const MAP_CONTROL_RESCUABLE: mapcontrol;
declare const MAP_CONTROL_USER: mapcontrol;
declare const MAP_DENSITY_HEAVY: mapdensity;
declare const MAP_DENSITY_LIGHT: mapdensity;
declare const MAP_DENSITY_MEDIUM: mapdensity;
declare const MAP_DENSITY_NONE: mapdensity;
declare const MAP_DIFFICULTY_EASY: gamedifficulty;
declare const MAP_DIFFICULTY_HARD: gamedifficulty;
declare const MAP_DIFFICULTY_INSANE: gamedifficulty;
declare const MAP_DIFFICULTY_NORMAL: gamedifficulty;
declare const MAP_FIXED_COLORS: mapflag;
declare const MAP_FOG_ALWAYS_VISIBLE: mapflag;
declare const MAP_FOG_HIDE_TERRAIN: mapflag;
declare const MAP_FOG_MAP_EXPLORED: mapflag;
declare const MAP_LOCK_ALLIANCE_CHANGES: mapflag;
declare const MAP_LOCK_RANDOM_SEED: mapflag;
declare const MAP_LOCK_RESOURCE_TRADING: mapflag;
declare const MAP_LOCK_SPEED: mapflag;
declare const MAP_LOC_PRIO_HIGH: startlocprio;
declare const MAP_LOC_PRIO_LOW: startlocprio;
declare const MAP_LOC_PRIO_NOT: startlocprio;
declare const MAP_OBSERVERS: mapflag;
declare const MAP_OBSERVERS_ON_DEATH: mapflag;
declare const MAP_PLACEMENT_FIXED: placement;
declare const MAP_PLACEMENT_RANDOM: placement;
declare const MAP_PLACEMENT_TEAMS_TOGETHER: placement;
declare const MAP_PLACEMENT_USE_MAP_SETTINGS: placement;
declare const MAP_RANDOM_HERO: mapflag;
declare const MAP_RANDOM_RACES: mapflag;
declare const MAP_RELOADED: mapflag;
declare const MAP_RESOURCE_TRADING_ALLIES_ONLY: mapflag;
declare const MAP_SHARED_ADVANCED_CONTROL: mapflag;
declare const MAP_SPEED_FAST: gamespeed;
declare const MAP_SPEED_FASTEST: gamespeed;
declare const MAP_SPEED_NORMAL: gamespeed;
declare const MAP_SPEED_SLOW: gamespeed;
declare const MAP_SPEED_SLOWEST: gamespeed;
declare const MAP_USE_HANDICAPS: mapflag;
declare const MOUSE_BUTTON_TYPE_LEFT: mousebuttontype;
declare const MOUSE_BUTTON_TYPE_MIDDLE: mousebuttontype;
declare const MOUSE_BUTTON_TYPE_RIGHT: mousebuttontype;
declare const NOT_EQUAL: limitop;
declare const PATHING_TYPE_AMPHIBIOUSPATHING: pathingtype;
declare const PATHING_TYPE_ANY: pathingtype;
declare const PATHING_TYPE_BLIGHTPATHING: pathingtype;
declare const PATHING_TYPE_BUILDABILITY: pathingtype;
declare const PATHING_TYPE_FLOATABILITY: pathingtype;
declare const PATHING_TYPE_FLYABILITY: pathingtype;
declare const PATHING_TYPE_PEONHARVESTPATHING: pathingtype;
declare const PATHING_TYPE_WALKABILITY: pathingtype;
declare const PLAYER_COLOR_AQUA: playercolor;
declare const PLAYER_COLOR_BLUE: playercolor;
declare const PLAYER_COLOR_BROWN: playercolor;
declare const PLAYER_COLOR_COAL: playercolor;
declare const PLAYER_COLOR_CYAN: playercolor;
declare const PLAYER_COLOR_EMERALD: playercolor;
declare const PLAYER_COLOR_GREEN: playercolor;
declare const PLAYER_COLOR_LAVENDER: playercolor;
declare const PLAYER_COLOR_LIGHT_BLUE: playercolor;
declare const PLAYER_COLOR_LIGHT_GRAY: playercolor;
declare const PLAYER_COLOR_MAROON: playercolor;
declare const PLAYER_COLOR_MINT: playercolor;
declare const PLAYER_COLOR_NAVY: playercolor;
declare const PLAYER_COLOR_ORANGE: playercolor;
declare const PLAYER_COLOR_PEACH: playercolor;
declare const PLAYER_COLOR_PEANUT: playercolor;
declare const PLAYER_COLOR_PINK: playercolor;
declare const PLAYER_COLOR_PURPLE: playercolor;
declare const PLAYER_COLOR_RED: playercolor;
declare const PLAYER_COLOR_SNOW: playercolor;
declare const PLAYER_COLOR_TURQUOISE: playercolor;
declare const PLAYER_COLOR_VIOLET: playercolor;
declare const PLAYER_COLOR_WHEAT: playercolor;
declare const PLAYER_COLOR_YELLOW: playercolor;
declare const PLAYER_GAME_RESULT_DEFEAT: playergameresult;
declare const PLAYER_GAME_RESULT_NEUTRAL: playergameresult;
declare const PLAYER_GAME_RESULT_TIE: playergameresult;
declare const PLAYER_GAME_RESULT_VICTORY: playergameresult;
declare const PLAYER_NEUTRAL_AGGRESSIVE: number;
declare const PLAYER_NEUTRAL_PASSIVE: number;
declare const PLAYER_SCORE_FOOD_MAXPROD: playerscore;
declare const PLAYER_SCORE_FOOD_MAXUSED: playerscore;
declare const PLAYER_SCORE_GOLD_GIVEN: playerscore;
declare const PLAYER_SCORE_GOLD_LOST_TAX: playerscore;
declare const PLAYER_SCORE_GOLD_LOST_UPKEEP: playerscore;
declare const PLAYER_SCORE_GOLD_MINED_TOTAL: playerscore;
declare const PLAYER_SCORE_GOLD_MINED_UPKEEP: playerscore;
declare const PLAYER_SCORE_GOLD_RECEIVED: playerscore;
declare const PLAYER_SCORE_HEROES_KILLED: playerscore;
declare const PLAYER_SCORE_HERO_TOTAL: playerscore;
declare const PLAYER_SCORE_ITEMS_GAINED: playerscore;
declare const PLAYER_SCORE_LUMBER_GIVEN: playerscore;
declare const PLAYER_SCORE_LUMBER_LOST_TAX: playerscore;
declare const PLAYER_SCORE_LUMBER_LOST_UPKEEP: playerscore;
declare const PLAYER_SCORE_LUMBER_RECEIVED: playerscore;
declare const PLAYER_SCORE_LUMBER_TOTAL: playerscore;
declare const PLAYER_SCORE_MERCS_HIRED: playerscore;
declare const PLAYER_SCORE_RESOURCE_TOTAL: playerscore;
declare const PLAYER_SCORE_STRUCT_BUILT: playerscore;
declare const PLAYER_SCORE_STRUCT_RAZED: playerscore;
declare const PLAYER_SCORE_TECH_PERCENT: playerscore;
declare const PLAYER_SCORE_TOTAL: playerscore;
declare const PLAYER_SCORE_UNITS_KILLED: playerscore;
declare const PLAYER_SCORE_UNITS_TRAINED: playerscore;
declare const PLAYER_SCORE_UNIT_TOTAL: playerscore;
declare const PLAYER_SLOT_STATE_EMPTY: playerslotstate;
declare const PLAYER_SLOT_STATE_LEFT: playerslotstate;
declare const PLAYER_SLOT_STATE_PLAYING: playerslotstate;
declare const PLAYER_STATE_ALLIED_VICTORY: playerstate;
declare const PLAYER_STATE_FOOD_CAP_CEILING: playerstate;
declare const PLAYER_STATE_GAME_RESULT: playerstate;
declare const PLAYER_STATE_GIVES_BOUNTY: playerstate;
declare const PLAYER_STATE_GOLD_GATHERED: playerstate;
declare const PLAYER_STATE_GOLD_UPKEEP_RATE: playerstate;
declare const PLAYER_STATE_LUMBER_GATHERED: playerstate;
declare const PLAYER_STATE_LUMBER_UPKEEP_RATE: playerstate;
declare const PLAYER_STATE_NO_CREEP_SLEEP: playerstate;
declare const PLAYER_STATE_OBSERVER: playerstate;
declare const PLAYER_STATE_OBSERVER_ON_DEATH: playerstate;
declare const PLAYER_STATE_PLACED: playerstate;
declare const PLAYER_STATE_RESOURCE_FOOD_CAP: playerstate;
declare const PLAYER_STATE_RESOURCE_FOOD_USED: playerstate;
declare const PLAYER_STATE_RESOURCE_GOLD: playerstate;
declare const PLAYER_STATE_RESOURCE_HERO_TOKENS: playerstate;
declare const PLAYER_STATE_RESOURCE_LUMBER: playerstate;
declare const PLAYER_STATE_UNFOLLOWABLE: playerstate;
declare const RACE_DEMON: race;
declare const RACE_HUMAN: race;
declare const RACE_NIGHTELF: race;
declare const RACE_ORC: race;
declare const RACE_OTHER: race;
declare const RACE_PREF_DEMON: racepreference;
declare const RACE_PREF_HUMAN: racepreference;
declare const RACE_PREF_NIGHTELF: racepreference;
declare const RACE_PREF_ORC: racepreference;
declare const RACE_PREF_RANDOM: racepreference;
declare const RACE_PREF_UNDEAD: racepreference;
declare const RACE_PREF_USER_SELECTABLE: racepreference;
declare const RACE_UNDEAD: race;
declare const RARITY_FREQUENT: raritycontrol;
declare const RARITY_RARE: raritycontrol;
declare const SOUND_TYPE_EFFECT: soundtype;
declare const SOUND_TYPE_EFFECT_LOOPED: soundtype;
declare const SOUND_VOLUMEGROUP_AMBIENTSOUNDS: volumegroup;
declare const SOUND_VOLUMEGROUP_COMBAT: volumegroup;
declare const SOUND_VOLUMEGROUP_FIRE: volumegroup;
declare const SOUND_VOLUMEGROUP_MUSIC: volumegroup;
declare const SOUND_VOLUMEGROUP_SPELLS: volumegroup;
declare const SOUND_VOLUMEGROUP_UI: volumegroup;
declare const SOUND_VOLUMEGROUP_UNITMOVEMENT: volumegroup;
declare const SOUND_VOLUMEGROUP_UNITSOUNDS: volumegroup;
declare const TEXMAP_FLAG_NONE: texmapflags;
declare const TEXMAP_FLAG_WRAP_U: texmapflags;
declare const TEXMAP_FLAG_WRAP_UV: texmapflags;
declare const TEXMAP_FLAG_WRAP_V: texmapflags;
declare const TRUE: boolean;
declare const UNIT_STATE_LIFE: unitstate;
declare const UNIT_STATE_MANA: unitstate;
declare const UNIT_STATE_MAX_LIFE: unitstate;
declare const UNIT_STATE_MAX_MANA: unitstate;
declare const UNIT_TYPE_ANCIENT: unittype;
declare const UNIT_TYPE_ATTACKS_FLYING: unittype;
declare const UNIT_TYPE_ATTACKS_GROUND: unittype;
declare const UNIT_TYPE_DEAD: unittype;
declare const UNIT_TYPE_ETHEREAL: unittype;
declare const UNIT_TYPE_FLYING: unittype;
declare const UNIT_TYPE_GIANT: unittype;
declare const UNIT_TYPE_GROUND: unittype;
declare const UNIT_TYPE_HERO: unittype;
declare const UNIT_TYPE_MAGIC_IMMUNE: unittype;
declare const UNIT_TYPE_MECHANICAL: unittype;
declare const UNIT_TYPE_MELEE_ATTACKER: unittype;
declare const UNIT_TYPE_PEON: unittype;
declare const UNIT_TYPE_PLAGUED: unittype;
declare const UNIT_TYPE_POISONED: unittype;
declare const UNIT_TYPE_POLYMORPHED: unittype;
declare const UNIT_TYPE_RANGED_ATTACKER: unittype;
declare const UNIT_TYPE_RESISTANT: unittype;
declare const UNIT_TYPE_SAPPER: unittype;
declare const UNIT_TYPE_SLEEPING: unittype;
declare const UNIT_TYPE_SNARED: unittype;
declare const UNIT_TYPE_STRUCTURE: unittype;
declare const UNIT_TYPE_STUNNED: unittype;
declare const UNIT_TYPE_SUMMONED: unittype;
declare const UNIT_TYPE_TAUREN: unittype;
declare const UNIT_TYPE_TOWNHALL: unittype;
declare const UNIT_TYPE_UNDEAD: unittype;
declare const VERSION_FROZEN_THRONE: version;
declare const VERSION_REIGN_OF_CHAOS: version;
declare const WEAPON_TYPE_AXE_MEDIUM_CHOP: weapontype;
declare const WEAPON_TYPE_CLAW_HEAVY_SLICE: weapontype;
declare const WEAPON_TYPE_CLAW_LIGHT_SLICE: weapontype;
declare const WEAPON_TYPE_CLAW_MEDIUM_SLICE: weapontype;
declare const WEAPON_TYPE_METAL_HEAVY_BASH: weapontype;
declare const WEAPON_TYPE_METAL_HEAVY_CHOP: weapontype;
declare const WEAPON_TYPE_METAL_HEAVY_SLICE: weapontype;
declare const WEAPON_TYPE_METAL_HEAVY_STAB: weapontype;
declare const WEAPON_TYPE_METAL_LIGHT_CHOP: weapontype;
declare const WEAPON_TYPE_METAL_LIGHT_SLICE: weapontype;
declare const WEAPON_TYPE_METAL_MEDIUM_BASH: weapontype;
declare const WEAPON_TYPE_METAL_MEDIUM_CHOP: weapontype;
declare const WEAPON_TYPE_METAL_MEDIUM_SLICE: weapontype;
declare const WEAPON_TYPE_METAL_MEDIUM_STAB: weapontype;
declare const WEAPON_TYPE_ROCK_HEAVY_BASH: weapontype;
declare const WEAPON_TYPE_WHOKNOWS: weapontype;
declare const WEAPON_TYPE_WOOD_HEAVY_BASH: weapontype;
declare const WEAPON_TYPE_WOOD_HEAVY_SLICE: weapontype;
declare const WEAPON_TYPE_WOOD_LIGHT_BASH: weapontype;
declare const WEAPON_TYPE_WOOD_LIGHT_SLICE: weapontype;
declare const WEAPON_TYPE_WOOD_LIGHT_STAB: weapontype;
declare const WEAPON_TYPE_WOOD_MEDIUM_BASH: weapontype;
declare const WEAPON_TYPE_WOOD_MEDIUM_SLICE: weapontype;
declare const WEAPON_TYPE_WOOD_MEDIUM_STAB: weapontype;

// =================
// ==== NATIVES ====
// =================
declare function AbilityId(abilityIdString: string): number;

declare function AbilityId2String(abilityId: number): string | undefined;

declare function Acos(x: number): number;

declare function AddHeroXP(whichHero: unit, xpToAdd: number, showEyeCandy: boolean): void;

declare function AddIndicator(whichWidget: widget, red: number, green: number, blue: number, alpha: number): void;

declare function AddItemToAllStock(itemId: number, currentStock: number, stockMax: number): void;

declare function AddItemToStock(whichUnit: unit, itemId: number, currentStock: number, stockMax: number): void;

declare function AddLightning(codeName: string, checkVisibility: boolean, x1: number, y1: number, x2: number, y2: number): lightning | undefined;

declare function AddLightningEx(codeName: string, checkVisibility: boolean, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): lightning | undefined;

declare function AddPlayerTechResearched(whichPlayer: player, techid: number, levels: number): void;

declare function AddResourceAmount(whichUnit: unit, amount: number): void;

declare function AddSpecialEffect(modelName: string, x: number, y: number): effect | undefined;

declare function AddSpecialEffectLoc(modelName: string, where: location): effect | undefined;

declare function AddSpecialEffectTarget(modelName: string, targetWidget: widget, attachPointName: string): effect | undefined;

declare function AddSpellEffect(abilityString: string, t: effecttype, x: number, y: number): effect | undefined;

declare function AddSpellEffectById(abilityId: number, t: effecttype, x: number, y: number): effect | undefined;

declare function AddSpellEffectByIdLoc(abilityId: number, t: effecttype, where: location): effect | undefined;

declare function AddSpellEffectLoc(abilityString: string, t: effecttype, where: location): effect | undefined;

declare function AddSpellEffectTarget(modelName: string, t: effecttype, targetWidget: widget, attachPoint: string): effect | undefined;

declare function AddSpellEffectTargetById(abilityId: number, t: effecttype, targetWidget: widget, attachPoint: string): effect | undefined;

declare function AddUnitAnimationProperties(whichUnit: unit, animProperties: string, add: boolean): void;

declare function AddUnitToAllStock(unitId: number, currentStock: number, stockMax: number): void;

declare function AddUnitToStock(whichUnit: unit, unitId: number, currentStock: number, stockMax: number): void;

declare function AddWeatherEffect(where: rect, effectID: number): weathereffect | undefined;

declare function AdjustCameraField(whichField: camerafield, offset: number, duration: number): void;

declare function And(operandA: boolexpr, operandB: boolexpr): boolexpr;

declare function Asin(y: number): number;

declare function Atan(x: number): number;

declare function Atan2(y: number, x: number): number;

declare function AttachSoundToUnit(soundHandle: sound, whichUnit: unit): void;

declare function AutomationTestEnd(testName: string): void;

declare function AutomationTestStart(testName: string): void;

declare function BlzDecPlayerTechResearched(whichPlayer: player, techid: number, levels: number): void;

declare function BlzEndUnitAbilityCooldown(whichUnit: unit, abilCode: number): void;

declare function BlzGetAbilityActivatedExtendedTooltip(abilCode: number, level: number): string | undefined;

declare function BlzGetAbilityActivatedIcon(abilCode: number): string | undefined;

declare function BlzGetAbilityActivatedPosX(abilCode: number): number;

declare function BlzGetAbilityActivatedPosY(abilCode: number): number;

declare function BlzGetAbilityActivatedTooltip(abilCode: number, level: number): string | undefined;

declare function BlzGetAbilityCooldown(abilId: number, level: number): number;

declare function BlzGetAbilityExtendedTooltip(abilCode: number, level: number): string | undefined;

declare function BlzGetAbilityIcon(abilCode: number): string | undefined;

declare function BlzGetAbilityManaCost(abilId: number, level: number): number;

declare function BlzGetAbilityPosX(abilCode: number): number;

declare function BlzGetAbilityPosY(abilCode: number): number;

declare function BlzGetAbilityResearchExtendedTooltip(abilCode: number, level: number): string | undefined;

declare function BlzGetAbilityResearchTooltip(abilCode: number, level: number): string | undefined;

declare function BlzGetAbilityTooltip(abilCode: number, level: number): string | undefined;

declare function BlzGetItemDescription(whichItem: item): string | undefined;

declare function BlzGetItemExtendedTooltip(whichItem: item): string | undefined;

declare function BlzGetItemIconPath(whichItem: item): string | undefined;

declare function BlzGetItemTooltip(whichItem: item): string | undefined;

declare function BlzGetLocalSpecialEffectX(whichEffect: effect): number;

declare function BlzGetLocalSpecialEffectY(whichEffect: effect): number;

declare function BlzGetLocalSpecialEffectZ(whichEffect: effect): number;

declare function BlzGetLocalUnitZ(whichUnit: unit): number;

declare function BlzGetTriggerPlayerMouseButton(): mousebuttontype | undefined;

declare function BlzGetTriggerPlayerMousePosition(): location | undefined;

declare function BlzGetTriggerPlayerMouseX(): number;

declare function BlzGetTriggerPlayerMouseY(): number;

declare function BlzGetUnitAbilityCooldown(whichUnit: unit, abilId: number, level: number): number;

declare function BlzGetUnitAbilityCooldownRemaining(whichUnit: unit, abilId: number): number;

declare function BlzGetUnitAbilityManaCost(whichUnit: unit, abilId: number, level: number): number;

declare function BlzGetUnitArmor(whichUnit: unit): number;

declare function BlzGetUnitAttackCooldown(whichUnit: unit, weaponIndex: number): number;

declare function BlzGetUnitBaseDamage(whichUnit: unit, weaponIndex: number): number;

declare function BlzGetUnitCollisionSize(whichUnit: unit): number;

declare function BlzGetUnitDiceNumber(whichUnit: unit, weaponIndex: number): number;

declare function BlzGetUnitDiceSides(whichUnit: unit, weaponIndex: number): number;

declare function BlzGetUnitMaxHP(whichUnit: unit): number;

declare function BlzGetUnitMaxMana(whichUnit: unit): number;

declare function BlzIsUnitInvulnerable(whichUnit: unit): boolean;

declare function BlzIsUnitSelectable(whichUnit: unit): boolean;

declare function BlzSetAbilityActivatedExtendedTooltip(abilCode: number, extendedTooltip: string, level: number): void;

declare function BlzSetAbilityActivatedIcon(abilCode: number, iconPath: string): void;

declare function BlzSetAbilityActivatedPosX(abilCode: number, x: number): void;

declare function BlzSetAbilityActivatedPosY(abilCode: number, y: number): void;

declare function BlzSetAbilityActivatedTooltip(abilCode: number, tooltip: string, level: number): void;

declare function BlzSetAbilityExtendedTooltip(abilCode: number, extendedTooltip: string, level: number): void;

declare function BlzSetAbilityIcon(abilCode: number, iconPath: string): void;

declare function BlzSetAbilityPosX(abilCode: number, x: number): void;

declare function BlzSetAbilityPosY(abilCode: number, y: number): void;

declare function BlzSetAbilityResearchExtendedTooltip(abilCode: number, researchExtendedTooltip: string, level: number): void;

declare function BlzSetAbilityResearchTooltip(abilCode: number, researchTooltip: string, level: number): void;

declare function BlzSetAbilityTooltip(abilCode: number, tooltip: string, level: number): void;

declare function BlzSetEventDamage(damage: number): void;

declare function BlzSetHeroProperName(whichUnit: unit, heroProperName: string): void;

declare function BlzSetItemDescription(whichItem: item, description: string): void;

declare function BlzSetItemExtendedTooltip(whichItem: item, extendedTooltip: string): void;

declare function BlzSetItemIconPath(whichItem: item, iconPath: string): void;

declare function BlzSetItemName(whichItem: item, name: string): void;

declare function BlzSetItemTooltip(whichItem: item, tooltip: string): void;

declare function BlzSetSpecialEffectAlpha(whichEffect: effect, alpha: number): void;

declare function BlzSetSpecialEffectColor(whichEffect: effect, r: number, g: number, b: number): void;

declare function BlzSetSpecialEffectColorByPlayer(whichEffect: effect, whichPlayer: player): void;

declare function BlzSetSpecialEffectHeight(whichEffect: effect, height: number): void;

declare function BlzSetSpecialEffectOrientation(whichEffect: effect, yaw: number, pitch: number, roll: number): void;

declare function BlzSetSpecialEffectPitch(whichEffect: effect, pitch: number): void;

declare function BlzSetSpecialEffectPosition(whichEffect: effect, x: number, y: number, z: number): void;

declare function BlzSetSpecialEffectPositionLoc(whichEffect: effect, loc: location): void;

declare function BlzSetSpecialEffectRoll(whichEffect: effect, roll: number): void;

declare function BlzSetSpecialEffectScale(whichEffect: effect, scale: number): void;

declare function BlzSetSpecialEffectTime(whichEffect: effect, time: number): void;

declare function BlzSetSpecialEffectTimeScale(whichEffect: effect, timeScale: number): void;

declare function BlzSetSpecialEffectX(whichEffect: effect, x: number): void;

declare function BlzSetSpecialEffectY(whichEffect: effect, y: number): void;

declare function BlzSetSpecialEffectYaw(whichEffect: effect, yaw: number): void;

declare function BlzSetSpecialEffectZ(whichEffect: effect, z: number): void;

declare function BlzSetUnitAbilityCooldown(whichUnit: unit, abilId: number, level: number, cooldown: number): void;

declare function BlzSetUnitAbilityManaCost(whichUnit: unit, abilId: number, level: number, manaCost: number): void;

declare function BlzSetUnitArmor(whichUnit: unit, armorAmount: number): void;

declare function BlzSetUnitAttackCooldown(whichUnit: unit, cooldown: number, weaponIndex: number): void;

declare function BlzSetUnitBaseDamage(whichUnit: unit, baseDamage: number, weaponIndex: number): void;

declare function BlzSetUnitDiceNumber(whichUnit: unit, diceNumber: number, weaponIndex: number): void;

declare function BlzSetUnitDiceSides(whichUnit: unit, diceSides: number, weaponIndex: number): void;

declare function BlzSetUnitMaxHP(whichUnit: unit, hp: number): void;

declare function BlzSetUnitMaxMana(whichUnit: unit, mana: number): void;

declare function BlzSetUnitName(whichUnit: unit, name: string): void;

declare function BlzUnitCancelTimedLife(whichUnit: unit): void;

declare function BlzUnitDisableAbility(whichUnit: unit, abilId: number, flag: boolean, hideUI: boolean): void;

declare function BlzUnitHideAbility(whichUnit: unit, abilId: number, flag: boolean): void;

declare function BlzUnitInterruptAttack(whichUnit: unit): void;

declare function CachePlayerHeroData(whichPlayer: player): void;

declare function CameraSetSmoothingFactor(factor: number): void;

declare function CameraSetSourceNoise(mag: number, velocity: number): void;

declare function CameraSetSourceNoiseEx(mag: number, velocity: number, vertOnly: boolean): void;

declare function CameraSetTargetNoise(mag: number, velocity: number): void;

declare function CameraSetTargetNoiseEx(mag: number, velocity: number, vertOnly: boolean): void;

declare function CameraSetupApply(whichSetup: camerasetup, doPan: boolean, panTimed: boolean): void;

declare function CameraSetupApplyForceDuration(whichSetup: camerasetup, doPan: boolean, forceDuration: number): void;

declare function CameraSetupApplyForceDurationWithZ(whichSetup: camerasetup, zDestOffset: number, forceDuration: number): void;

declare function CameraSetupApplyWithZ(whichSetup: camerasetup, zDestOffset: number): void;

declare function CameraSetupGetDestPositionLoc(whichSetup: camerasetup): location;

declare function CameraSetupGetDestPositionX(whichSetup: camerasetup): number;

declare function CameraSetupGetDestPositionY(whichSetup: camerasetup): number;

declare function CameraSetupGetField(whichSetup: camerasetup, whichField: camerafield): number;

declare function CameraSetupSetDestPosition(whichSetup: camerasetup, x: number, y: number, duration: number): void;

declare function CameraSetupSetField(whichSetup: camerasetup, whichField: camerafield, value: number, duration: number): void;

declare function ChangeLevel(newLevel: string, doScoreScreen: boolean): void;

declare function Cheat(cheatStr: string): void;

declare function ChooseRandomCreep(level: number): number;

declare function ChooseRandomItem(level: number): number;

declare function ChooseRandomItemEx(whichType: itemtype, level: number): number;

declare function ChooseRandomNPBuilding(): number;

declare function ClearMapMusic(): void;

declare function ClearSelection(): void;

declare function ClearTextMessages(): void;

declare function CommandAI(num: player, command: number, data: number): void;

declare function Condition(func: () => void): conditionfunc;

declare function ConvertAIDifficulty(i: number): aidifficulty | undefined;

declare function ConvertAllianceType(i: number): alliancetype | undefined;

declare function ConvertAttackType(i: number): attacktype | undefined;

declare function ConvertBlendMode(i: number): blendmode | undefined;

declare function ConvertCameraField(i: number): camerafield | undefined;

declare function ConvertDamageType(i: number): damagetype | undefined;

declare function ConvertDialogEvent(i: number): dialogevent | undefined;

declare function ConvertEffectType(i: number): effecttype | undefined;

declare function ConvertFGameState(i: number): fgamestate | undefined;

declare function ConvertFogState(i: number): fogstate | undefined;

declare function ConvertGameDifficulty(i: number): gamedifficulty | undefined;

declare function ConvertGameEvent(i: number): gameevent | undefined;

declare function ConvertGameSpeed(i: number): gamespeed | undefined;

declare function ConvertGameType(i: number): gametype | undefined;

declare function ConvertIGameState(i: number): igamestate | undefined;

declare function ConvertItemType(i: number): itemtype | undefined;

declare function ConvertLimitOp(i: number): limitop | undefined;

declare function ConvertMapControl(i: number): mapcontrol | undefined;

declare function ConvertMapDensity(i: number): mapdensity | undefined;

declare function ConvertMapFlag(i: number): mapflag | undefined;

declare function ConvertMapSetting(i: number): mapsetting | undefined;

declare function ConvertMapVisibility(i: number): mapvisibility | undefined;

declare function ConvertMouseButtonType(i: number): mousebuttontype | undefined;

declare function ConvertPathingType(i: number): pathingtype | undefined;

declare function ConvertPlacement(i: number): placement | undefined;

declare function ConvertPlayerColor(i: number): playercolor | undefined;

declare function ConvertPlayerEvent(i: number): playerevent | undefined;

declare function ConvertPlayerGameResult(i: number): playergameresult | undefined;

declare function ConvertPlayerScore(i: number): playerscore | undefined;

declare function ConvertPlayerSlotState(i: number): playerslotstate | undefined;

declare function ConvertPlayerState(i: number): playerstate | undefined;

declare function ConvertPlayerUnitEvent(i: number): playerunitevent | undefined;

declare function ConvertRace(i: number): race | undefined;

declare function ConvertRacePref(i: number): racepreference | undefined;

declare function ConvertRarityControl(i: number): raritycontrol | undefined;

declare function ConvertSoundType(i: number): soundtype | undefined;

declare function ConvertStartLocPrio(i: number): startlocprio | undefined;

declare function ConvertTexMapFlags(i: number): texmapflags | undefined;

declare function ConvertUnitEvent(i: number): unitevent | undefined;

declare function ConvertUnitState(i: number): unitstate | undefined;

declare function ConvertUnitType(i: number): unittype | undefined;

declare function ConvertVersion(i: number): version | undefined;

declare function ConvertVolumeGroup(i: number): volumegroup | undefined;

declare function ConvertWeaponType(i: number): weapontype | undefined;

declare function ConvertWidgetEvent(i: number): widgetevent | undefined;

declare function CopySaveGame(sourceSaveName: string, destSaveName: string): boolean;

declare function Cos(radians: number): number;

declare function CreateBlightedGoldmine(id: player, x: number, y: number, face: number): unit | undefined;

declare function CreateCameraSetup(): camerasetup;

declare function CreateCorpse(whichPlayer: player, unitid: number, x: number, y: number, face: number): unit | undefined;

declare function CreateDeadDestructable(objectid: number, x: number, y: number, face: number, scale: number, variation: number): destructable | undefined;

declare function CreateDeadDestructableZ(objectid: number, x: number, y: number, z: number, face: number, scale: number, variation: number): destructable | undefined;

declare function CreateDefeatCondition(): defeatcondition | undefined;

declare function CreateDestructable(objectid: number, x: number, y: number, face: number, scale: number, variation: number): destructable | undefined;

declare function CreateDestructableZ(objectid: number, x: number, y: number, z: number, face: number, scale: number, variation: number): destructable | undefined;

declare function CreateFogModifierRadius(forWhichPlayer: player, whichState: fogstate, centerx: number, centerY: number, radius: number, useSharedVision: boolean, afterUnits: boolean): fogmodifier | undefined;

declare function CreateFogModifierRadiusLoc(forWhichPlayer: player, whichState: fogstate, center: location, radius: number, useSharedVision: boolean, afterUnits: boolean): fogmodifier | undefined;

declare function CreateFogModifierRect(forWhichPlayer: player, whichState: fogstate, where: rect, useSharedVision: boolean, afterUnits: boolean): fogmodifier | undefined;

declare function CreateForce(): force | undefined;

declare function CreateGroup(): group | undefined;

declare function CreateImage(file: string, sizeX: number, sizeY: number, sizeZ: number, posX: number, posY: number, posZ: number, originX: number, originY: number, originZ: number, imageType: number): image | undefined;

declare function CreateItem(itemid: number, x: number, y: number): item | undefined;

declare function CreateItemPool(): itempool | undefined;

declare function CreateLeaderboard(): leaderboard | undefined;

declare function CreateMIDISound(soundLabel: string, fadeInRate: number, fadeOutRate: number): sound | undefined;

declare function CreateMultiboard(): multiboard | undefined;

declare function CreateQuest(): quest | undefined;

declare function CreateRegion(): region;

declare function CreateSound(fileName: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInRate: number, fadeOutRate: number, eaxSetting: string): sound | undefined;

declare function CreateSoundFilenameWithLabel(fileName: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInRate: number, fadeOutRate: number, SLKEntryName: string): sound | undefined;

declare function CreateSoundFromLabel(soundLabel: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInRate: number, fadeOutRate: number): sound | undefined;

declare function CreateTextTag(): texttag | undefined;

declare function CreateTimer(): timer;

declare function CreateTimerDialog(t: timer): timerdialog | undefined;

declare function CreateTrackable(trackableModelPath: string, x: number, y: number, facing: number): trackable | undefined;

declare function CreateTrigger(): trigger;

declare function CreateUbersplat(x: number, y: number, name: string, red: number, green: number, blue: number, alpha: number, forcePaused: boolean, noBirthTime: boolean): ubersplat | undefined;

declare function CreateUnit(id: player, unitid: number, x: number, y: number, face: number): unit | undefined;

declare function CreateUnitAtLoc(id: player, unitid: number, whichLocation: location, face: number): unit | undefined;

declare function CreateUnitAtLocByName(id: player, unitname: string, whichLocation: location, face: number): unit | undefined;

declare function CreateUnitByName(whichPlayer: player, unitname: string, x: number, y: number, face: number): unit | undefined;

declare function CreateUnitPool(): unitpool | undefined;

declare function CripplePlayer(whichPlayer: player, toWhichPlayers: force, flag: boolean): void;

declare function DecUnitAbilityLevel(whichUnit: unit, abilcode: number): number;

declare function DefeatConditionSetDescription(whichCondition: defeatcondition, description: string): void;

declare function DefineStartLocation(whichStartLoc: number, x: number, y: number): void;

declare function DefineStartLocationLoc(whichStartLoc: number, whichLocation: location): void;

declare function Deg2Rad(degrees: number): number;

declare function DestroyBoolExpr(e: boolexpr): void;

declare function DestroyCondition(c: conditionfunc): void;

declare function DestroyDefeatCondition(whichCondition: defeatcondition): void;

declare function DestroyEffect(whichEffect: effect): void;

declare function DestroyFilter(f: filterfunc): void;

declare function DestroyFogModifier(whichFogModifier: fogmodifier): void;

declare function DestroyForce(whichForce: force): void;

declare function DestroyGroup(whichGroup: group): void;

declare function DestroyImage(whichImage: image): void;

declare function DestroyItemPool(whichItemPool: itempool): void;

declare function DestroyLeaderboard(lb: leaderboard): void;

declare function DestroyLightning(whichBolt: lightning): boolean;

declare function DestroyMultiboard(lb: multiboard): void;

declare function DestroyQuest(whichQuest: quest): void;

declare function DestroyTextTag(t: texttag): void;

declare function DestroyTimer(whichTimer: timer): void;

declare function DestroyTimerDialog(whichDialog: timerdialog): void;

declare function DestroyTrigger(whichTrigger: trigger): void;

declare function DestroyUbersplat(whichSplat: ubersplat): void;

declare function DestroyUnitPool(whichPool: unitpool): void;

declare function DestructableRestoreLife(d: destructable, life: number, birth: boolean): void;

declare function DialogAddButton(whichDialog: dialog, buttonText: string, hotkey: number): button | undefined;

declare function DialogAddQuitButton(whichDialog: dialog, doScoreScreen: boolean, buttonText: string, hotkey: number): button | undefined;

declare function DialogClear(whichDialog: dialog): void;

declare function DialogCreate(): dialog | undefined;

declare function DialogDestroy(whichDialog: dialog): void;

declare function DialogDisplay(whichPlayer: player, whichDialog: dialog, flag: boolean): void;

declare function DialogSetMessage(whichDialog: dialog, messageText: string): void;

declare function DisableRestartMission(flag: boolean): void;

declare function DisableTrigger(whichTrigger: trigger): void;

declare function DisplayCineFilter(flag: boolean): void;

declare function DisplayLoadDialog(): void;

declare function DisplayTextToPlayer(toPlayer: player, x: number, y: number, message: string): void;

declare function DisplayTimedTextFromPlayer(toPlayer: player, x: number, y: number, duration: number, message: string): void;

declare function DisplayTimedTextToPlayer(toPlayer: player, x: number, y: number, duration: number, message: string): void;

declare function DoNotSaveReplay(): void;

declare function EnableDragSelect(state: boolean, ui: boolean): void;

declare function EnableMinimapFilterButtons(enableAlly: boolean, enableCreep: boolean): void;

declare function EnableOcclusion(flag: boolean): void;

declare function EnablePreSelect(state: boolean, ui: boolean): void;

declare function EnableSelect(state: boolean, ui: boolean): void;

declare function EnableTrigger(whichTrigger: trigger): void;

declare function EnableUserControl(b: boolean): void;

declare function EnableUserUI(b: boolean): void;

declare function EnableWeatherEffect(whichEffect: weathereffect, enable: boolean): void;

declare function EnableWorldFogBoundary(b: boolean): void;

declare function EndCinematicScene(): void;

declare function EndGame(doScoreScreen: boolean): void;

declare function EndThematicMusic(): void;

declare function EnumDestructablesInRect(r: rect, filter: boolexpr | undefined, actionFunc: () => void): void;

declare function EnumItemsInRect(r: rect, filter: boolexpr | undefined, actionFunc: () => void): void;

declare function ExecuteFunc(funcName: string): void;

declare function Filter(func: () => void): filterfunc;

declare function FinishUbersplat(whichSplat: ubersplat): void;

declare function FirstOfGroup(whichGroup: group): unit | undefined;

declare function FlashQuestDialogButton(): void;

declare function FlushChildHashtable(table: hashtable, parentKey: number): void;

declare function FlushGameCache(cache: gamecache): void;

declare function FlushParentHashtable(table: hashtable): void;

declare function FlushStoredBoolean(cache: gamecache, missionKey: string, key: string): void;

declare function FlushStoredInteger(cache: gamecache, missionKey: string, key: string): void;

declare function FlushStoredMission(cache: gamecache, missionKey: string): void;

declare function FlushStoredReal(cache: gamecache, missionKey: string, key: string): void;

declare function FlushStoredString(cache: gamecache, missionKey: string, key: string): void;

declare function FlushStoredUnit(cache: gamecache, missionKey: string, key: string): void;

declare function FogEnable(enable: boolean): void;

declare function FogMaskEnable(enable: boolean): void;

declare function FogModifierStart(whichFogModifier: fogmodifier): void;

declare function FogModifierStop(whichFogModifier: fogmodifier): void;

declare function ForceAddPlayer(whichForce: force, whichPlayer: player): void;

declare function ForceCampaignSelectScreen(): void;

declare function ForceCinematicSubtitles(flag: boolean): void;

declare function ForceClear(whichForce: force): void;

declare function ForceEnumAllies(whichForce: force, whichPlayer: player, filter?: boolexpr): void;

declare function ForceEnumEnemies(whichForce: force, whichPlayer: player, filter?: boolexpr): void;

declare function ForceEnumPlayers(whichForce: force, filter?: boolexpr): void;

declare function ForceEnumPlayersCounted(whichForce: force, filter: boolexpr | undefined, countLimit: number): void;

declare function ForcePlayerStartLocation(whichPlayer: player, startLocIndex: number): void;

declare function ForceQuestDialogUpdate(): void;

declare function ForceRemovePlayer(whichForce: force, whichPlayer: player): void;

declare function ForceUICancel(): void;

declare function ForceUIKey(key: string): void;

declare function ForForce(whichForce: force, callback: () => void): void;

declare function ForGroup(whichGroup: group, callback: () => void): void;

declare function GetAbilityEffect(abilityString: string, t: effecttype, index: number): string | undefined;

declare function GetAbilityEffectById(abilityId: number, t: effecttype, index: number): string | undefined;

declare function GetAbilitySound(abilityString: string, t: soundtype): string | undefined;

declare function GetAbilitySoundById(abilityId: number, t: soundtype): string | undefined;

declare function GetAIDifficulty(num: player): aidifficulty | undefined;

declare function GetAllyColorFilterState(): number;

declare function GetAttacker(): unit | undefined;

declare function GetBJMaxPlayers(): number;

declare function GetBJMaxPlayerSlots(): number;

declare function GetBJPlayerNeutralExtra(): number;

declare function GetBJPlayerNeutralVictim(): number;

declare function GetBuyingUnit(): unit | undefined;

declare function GetCameraBoundMaxX(): number;

declare function GetCameraBoundMaxY(): number;

declare function GetCameraBoundMinX(): number;

declare function GetCameraBoundMinY(): number;

declare function GetCameraEyePositionLoc(): location | undefined;

declare function GetCameraEyePositionX(): number;

declare function GetCameraEyePositionY(): number;

declare function GetCameraEyePositionZ(): number;

declare function GetCameraField(whichField: camerafield): number;

declare function GetCameraMargin(whichMargin: number): number;

declare function GetCameraTargetPositionLoc(): location | undefined;

declare function GetCameraTargetPositionX(): number;

declare function GetCameraTargetPositionY(): number;

declare function GetCameraTargetPositionZ(): number;

declare function GetCancelledStructure(): unit | undefined;

declare function GetChangingUnit(): unit | undefined;

declare function GetChangingUnitPrevOwner(): player | undefined;

declare function GetClickedButton(): button | undefined;

declare function GetClickedDialog(): dialog | undefined;

declare function GetConstructedStructure(): unit | undefined;

declare function GetConstructingStructure(): unit | undefined;

declare function GetCreatureDensity(): mapdensity | undefined;

declare function GetCreepCampFilterState(): boolean;

declare function GetCustomCampaignButtonVisible(whichButton: number): boolean;

declare function GetDecayingUnit(): unit | undefined;

declare function GetDefaultDifficulty(): gamedifficulty | undefined;

declare function GetDestructableLife(d: destructable): number;

declare function GetDestructableMaxLife(d: destructable): number;

declare function GetDestructableName(d: destructable): string | undefined;

declare function GetDestructableOccluderHeight(d: destructable): number;

declare function GetDestructableTypeId(d: destructable): number;

declare function GetDestructableX(d: destructable): number;

declare function GetDestructableY(d: destructable): number;

declare function GetDetectedUnit(): unit | undefined;

declare function GetDyingUnit(): unit | undefined;

declare function GetEnteringUnit(): unit | undefined;

declare function GetEnumDestructable(): destructable | undefined;

declare function GetEnumItem(): item | undefined;

declare function GetEnumPlayer(): player | undefined;

declare function GetEnumUnit(): unit | undefined;

declare function GetEventDamage(): number;

declare function GetEventDamageSource(): unit | undefined;

declare function GetEventDetectingPlayer(): player | undefined;

declare function GetEventGameState(): gamestate | undefined;

declare function GetEventPlayerChatString(): string | undefined;

declare function GetEventPlayerChatStringMatched(): string | undefined;

declare function GetEventPlayerState(): playerstate | undefined;

declare function GetEventTargetUnit(): unit | undefined;

declare function GetEventUnitState(): unitstate | undefined;

declare function GetExpiredTimer(): timer | undefined;

declare function GetFilterDestructable(): destructable | undefined;

declare function GetFilterItem(): item | undefined;

declare function GetFilterPlayer(): player | undefined;

declare function GetFilterUnit(): unit | undefined;

declare function GetFloatGameState(whichFloatGameState: fgamestate): number;

declare function GetFoodMade(unitId: number): number;

declare function GetFoodUsed(unitId: number): number;

declare function GetGameDifficulty(): gamedifficulty | undefined;

declare function GetGamePlacement(): placement | undefined;

declare function GetGameSpeed(): gamespeed | undefined;

declare function GetGameTypeSelected(): gametype | undefined;

declare function GetHandleId(h: handle): number;

declare function GetHeroAgi(whichHero: unit, includeBonuses: boolean): number;

declare function GetHeroInt(whichHero: unit, includeBonuses: boolean): number;

declare function GetHeroLevel(whichHero: unit): number;

declare function GetHeroProperName(whichHero: unit): string | undefined;

declare function GetHeroSkillPoints(whichHero: unit): number;

declare function GetHeroStr(whichHero: unit, includeBonuses: boolean): number;

declare function GetHeroXP(whichHero: unit): number;

declare function GetIntegerGameState(whichIntegerGameState: igamestate): number;

declare function GetIssuedOrderId(): number;

declare function GetItemCharges(whichItem: item): number;

declare function GetItemLevel(whichItem: item): number;

declare function GetItemName(whichItem: item): string | undefined;

declare function GetItemPlayer(whichItem: item): player | undefined;

declare function GetItemType(whichItem: item): itemtype | undefined;

declare function GetItemTypeId(i: item): number;

declare function GetItemUserData(whichItem: item): number;

declare function GetItemX(i: item): number;

declare function GetItemY(i: item): number;

declare function GetKillingUnit(): unit | undefined;

declare function GetLearnedSkill(): number;

declare function GetLearnedSkillLevel(): number;

declare function GetLearningUnit(): unit | undefined;

declare function GetLeavingUnit(): unit | undefined;

declare function GetLevelingUnit(): unit | undefined;

declare function GetLightningColorA(whichBolt: lightning): number;

declare function GetLightningColorB(whichBolt: lightning): number;

declare function GetLightningColorG(whichBolt: lightning): number;

declare function GetLightningColorR(whichBolt: lightning): number;

declare function GetLoadedUnit(): unit | undefined;

declare function GetLocalizedHotkey(source: string): number;

declare function GetLocalizedString(source: string): string | undefined;

declare function GetLocalPlayer(): player;

declare function GetLocationX(whichLocation: location): number;

declare function GetLocationY(whichLocation: location): number;

declare function GetLocationZ(whichLocation: location): number;

declare function GetManipulatedItem(): item | undefined;

declare function GetManipulatingUnit(): unit | undefined;

declare function GetObjectName(objectId: number): string | undefined;

declare function GetOrderedUnit(): unit | undefined;

declare function GetOrderPointLoc(): location | undefined;

declare function GetOrderPointX(): number;

declare function GetOrderPointY(): number;

declare function GetOrderTarget(): widget | undefined;

declare function GetOrderTargetDestructable(): destructable | undefined;

declare function GetOrderTargetItem(): item | undefined;

declare function GetOrderTargetUnit(): unit | undefined;

declare function GetOwningPlayer(whichUnit: unit): player;

declare function GetPlayerAlliance(sourcePlayer: player, otherPlayer: player, whichAllianceSetting: alliancetype): boolean;

declare function GetPlayerColor(whichPlayer: player): playercolor;

declare function GetPlayerController(whichPlayer: player): mapcontrol;

declare function GetPlayerHandicap(whichPlayer: player): number;

declare function GetPlayerHandicapXP(whichPlayer: player): number;

declare function GetPlayerId(whichPlayer: player): number;

declare function GetPlayerName(whichPlayer: player): string | undefined;

declare function GetPlayerNeutralAggressive(): number;

declare function GetPlayerNeutralPassive(): number;

declare function GetPlayerRace(whichPlayer: player): race | undefined;

declare function GetPlayers(): number;

declare function GetPlayerScore(whichPlayer: player, whichPlayerScore: playerscore): number;

declare function GetPlayerSelectable(whichPlayer: player): boolean;

declare function GetPlayerSlotState(whichPlayer: player): playerslotstate;

declare function GetPlayerStartLocation(whichPlayer: player): number;

declare function GetPlayerState(whichPlayer: player, whichPlayerState: playerstate): number;

declare function GetPlayerStructureCount(whichPlayer: player, includeIncomplete: boolean): number;

declare function GetPlayerTaxRate(sourcePlayer: player, otherPlayer: player, whichResource: playerstate): number;

declare function GetPlayerTeam(whichPlayer: player): number;

declare function GetPlayerTechCount(whichPlayer: player, techid: number, specificonly: boolean): number;

declare function GetPlayerTechMaxAllowed(whichPlayer: player, techid: number): number;

declare function GetPlayerTechResearched(whichPlayer: player, techid: number, specificonly: boolean): boolean;

declare function GetPlayerTypedUnitCount(whichPlayer: player, unitName: string, includeIncomplete: boolean, includeUpgrades: boolean): number;

declare function GetPlayerUnitCount(whichPlayer: player, includeIncomplete: boolean): number;

declare function GetRandomInt(lowBound: number, highBound: number): number;

declare function GetRandomReal(lowBound: number, highBound: number): number;

declare function GetRectCenterX(whichRect: rect): number;

declare function GetRectCenterY(whichRect: rect): number;

declare function GetRectMaxX(whichRect: rect): number;

declare function GetRectMaxY(whichRect: rect): number;

declare function GetRectMinX(whichRect: rect): number;

declare function GetRectMinY(whichRect: rect): number;

declare function GetRescuer(): unit | undefined;

declare function GetResearched(): number;

declare function GetResearchingUnit(): unit | undefined;

declare function GetResourceAmount(whichUnit: unit): number;

declare function GetResourceDensity(): mapdensity | undefined;

declare function GetRevivableUnit(): unit | undefined;

declare function GetRevivingUnit(): unit | undefined;

declare function GetSaveBasicFilename(): string | undefined;

declare function GetSellingUnit(): unit | undefined;

declare function GetSoldItem(): item | undefined;

declare function GetSoldUnit(): unit | undefined;

declare function GetSoundDuration(soundHandle: sound): number;

declare function GetSoundFileDuration(musicFileName: string): number;

declare function GetSoundIsLoading(soundHandle: sound): boolean;

declare function GetSoundIsPlaying(soundHandle: sound): boolean;

declare function GetSpellAbility(): ability | undefined;

declare function GetSpellAbilityId(): number;

declare function GetSpellAbilityUnit(): unit | undefined;

declare function GetSpellTargetDestructable(): destructable | undefined;

declare function GetSpellTargetItem(): item | undefined;

declare function GetSpellTargetLoc(): location | undefined;

declare function GetSpellTargetUnit(): unit | undefined;

declare function GetSpellTargetX(): number;

declare function GetSpellTargetY(): number;

declare function GetStartLocationLoc(whichStartLocation: number): location | undefined;

declare function GetStartLocationX(whichStartLocation: number): number;

declare function GetStartLocationY(whichStartLocation: number): number;

declare function GetStartLocPrio(whichStartLoc: number, prioSlotIndex: number): startlocprio | undefined;

declare function GetStartLocPrioSlot(whichStartLoc: number, prioSlotIndex: number): number;

declare function GetStoredBoolean(cache: gamecache, missionKey: string, key: string): boolean;

declare function GetStoredInteger(cache: gamecache, missionKey: string, key: string): number;

declare function GetStoredReal(cache: gamecache, missionKey: string, key: string): number;

declare function GetStoredString(cache: gamecache, missionKey: string, key: string): string | undefined;

declare function GetSummonedUnit(): unit | undefined;

declare function GetSummoningUnit(): unit | undefined;

declare function GetTeams(): number;

declare function GetTerrainCliffLevel(x: number, y: number): number;

declare function GetTerrainType(x: number, y: number): number;

declare function GetTerrainVariance(x: number, y: number): number;

declare function GetTimeOfDayScale(): number;

declare function GetTournamentFinishNowPlayer(): player | undefined;

declare function GetTournamentFinishNowRule(): number;

declare function GetTournamentFinishSoonTimeRemaining(): number;

declare function GetTournamentScore(whichPlayer: player): number;

declare function GetTrainedUnit(): unit | undefined;

declare function GetTrainedUnitType(): number;

declare function GetTransportUnit(): unit | undefined;

declare function GetTriggerDestructable(): destructable | undefined;

declare function GetTriggerEvalCount(whichTrigger: trigger): number;

declare function GetTriggerEventId(): eventid | undefined;

declare function GetTriggerExecCount(whichTrigger: trigger): number;

declare function GetTriggeringRegion(): region | undefined;

declare function GetTriggeringTrackable(): trackable | undefined;

declare function GetTriggeringTrigger(): trigger | undefined;

declare function GetTriggerPlayer(): player | undefined;

declare function GetTriggerUnit(): unit | undefined;

declare function GetTriggerWidget(): widget | undefined;

declare function GetUnitAbilityLevel(whichUnit: unit, abilcode: number): number;

declare function GetUnitAcquireRange(whichUnit: unit): number;

declare function GetUnitCurrentOrder(whichUnit: unit): number;

declare function GetUnitDefaultAcquireRange(whichUnit: unit): number;

declare function GetUnitDefaultFlyHeight(whichUnit: unit): number;

declare function GetUnitDefaultMoveSpeed(whichUnit: unit): number;

declare function GetUnitDefaultPropWindow(whichUnit: unit): number;

declare function GetUnitDefaultTurnSpeed(whichUnit: unit): number;

declare function GetUnitFacing(whichUnit: unit): number;

declare function GetUnitFlyHeight(whichUnit: unit): number;

declare function GetUnitFoodMade(whichUnit: unit): number;

declare function GetUnitFoodUsed(whichUnit: unit): number;

declare function GetUnitLevel(whichUnit: unit): number;

declare function GetUnitLoc(whichUnit: unit): location;

declare function GetUnitMoveSpeed(whichUnit: unit): number;

declare function GetUnitName(whichUnit: unit): string | undefined;

declare function GetUnitPointValue(whichUnit: unit): number;

declare function GetUnitPointValueByType(unitType: number): number;

declare function GetUnitPropWindow(whichUnit: unit): number;

declare function GetUnitRace(whichUnit: unit): race;

declare function GetUnitRallyDestructable(whichUnit: unit): destructable | undefined;

declare function GetUnitRallyPoint(whichUnit: unit): location | undefined;

declare function GetUnitRallyUnit(whichUnit: unit): unit | undefined;

declare function GetUnitState(whichUnit: unit, whichUnitState: unitstate): number;

declare function GetUnitTurnSpeed(whichUnit: unit): number;

declare function GetUnitTypeId(whichUnit: unit): number;

declare function GetUnitUserData(whichUnit: unit): number;

declare function GetUnitX(whichUnit: unit): number;

declare function GetUnitY(whichUnit: unit): number;

declare function GetWidgetLife(whichWidget: widget): number;

declare function GetWidgetX(whichWidget: widget): number;

declare function GetWidgetY(whichWidget: widget): number;

declare function GetWinningPlayer(): player | undefined;

declare function GetWorldBounds(): rect | undefined;

declare function GroupAddUnit(whichGroup: group, whichUnit: unit): void;

declare function GroupClear(whichGroup: group): void;

declare function GroupEnumUnitsInRange(whichGroup: group, x: number, y: number, radius: number, filter?: boolexpr): void;

declare function GroupEnumUnitsInRangeCounted(whichGroup: group, x: number, y: number, radius: number, filter: boolexpr | undefined, countLimit: number): void;

declare function GroupEnumUnitsInRangeOfLoc(whichGroup: group, whichLocation: location, radius: number, filter?: boolexpr): void;

declare function GroupEnumUnitsInRangeOfLocCounted(whichGroup: group, whichLocation: location, radius: number, filter: boolexpr | undefined, countLimit: number): void;

declare function GroupEnumUnitsInRect(whichGroup: group, r: rect, filter?: boolexpr): void;

declare function GroupEnumUnitsInRectCounted(whichGroup: group, r: rect, filter: boolexpr | undefined, countLimit: number): void;

declare function GroupEnumUnitsOfPlayer(whichGroup: group, whichPlayer: player, filter?: boolexpr): void;

declare function GroupEnumUnitsOfType(whichGroup: group, unitname: string, filter?: boolexpr): void;

declare function GroupEnumUnitsOfTypeCounted(whichGroup: group, unitname: string, filter: boolexpr | undefined, countLimit: number): void;

declare function GroupEnumUnitsSelected(whichGroup: group, whichPlayer: player, filter?: boolexpr): void;

declare function GroupImmediateOrder(whichGroup: group, order: string): boolean;

declare function GroupImmediateOrderById(whichGroup: group, order: number): boolean;

declare function GroupPointOrder(whichGroup: group, order: string, x: number, y: number): boolean;

declare function GroupPointOrderById(whichGroup: group, order: number, x: number, y: number): boolean;

declare function GroupPointOrderByIdLoc(whichGroup: group, order: number, whichLocation: location): boolean;

declare function GroupPointOrderLoc(whichGroup: group, order: string, whichLocation: location): boolean;

declare function GroupRemoveUnit(whichGroup: group, whichUnit: unit): void;

declare function GroupTargetOrder(whichGroup: group, order: string, targetWidget: widget): boolean;

declare function GroupTargetOrderById(whichGroup: group, order: number, targetWidget: widget): boolean;

declare function HaveSavedBoolean(table: hashtable, parentKey: number, childKey: number): boolean;

declare function HaveSavedHandle(table: hashtable, parentKey: number, childKey: number): boolean;

declare function HaveSavedInteger(table: hashtable, parentKey: number, childKey: number): boolean;

declare function HaveSavedReal(table: hashtable, parentKey: number, childKey: number): boolean;

declare function HaveSavedString(table: hashtable, parentKey: number, childKey: number): boolean;

declare function HaveStoredBoolean(cache: gamecache, missionKey: string, key: string): boolean;

declare function HaveStoredInteger(cache: gamecache, missionKey: string, key: string): boolean;

declare function HaveStoredReal(cache: gamecache, missionKey: string, key: string): boolean;

declare function HaveStoredString(cache: gamecache, missionKey: string, key: string): boolean;

declare function HaveStoredUnit(cache: gamecache, missionKey: string, key: string): boolean;

declare function I2R(i: number): number;

declare function I2S(i: number): string | undefined;

declare function IncUnitAbilityLevel(whichUnit: unit, abilcode: number): number;

declare function InitGameCache(campaignFile: string): gamecache | undefined;

declare function InitHashtable(): hashtable | undefined;

declare function IsCineFilterDisplayed(): boolean;

declare function IsDestructableInvulnerable(d: destructable): boolean;

declare function IsFogEnabled(): boolean;

declare function IsFoggedToPlayer(x: number, y: number, whichPlayer: player): boolean;

declare function IsFogMaskEnabled(): boolean;

declare function IsGameTypeSupported(whichGameType: gametype): boolean;

declare function IsHeroUnitId(unitId: number): boolean;

declare function IsItemIdPawnable(itemId: number): boolean;

declare function IsItemIdPowerup(itemId: number): boolean;

declare function IsItemIdSellable(itemId: number): boolean;

declare function IsItemInvulnerable(whichItem: item): boolean;

declare function IsItemOwned(whichItem: item): boolean;

declare function IsItemPawnable(whichItem: item): boolean;

declare function IsItemPowerup(whichItem: item): boolean;

declare function IsItemSellable(whichItem: item): boolean;

declare function IsItemVisible(whichItem: item): boolean;

declare function IsLeaderboardDisplayed(lb: leaderboard): boolean;

declare function IsLocationFoggedToPlayer(whichLocation: location, whichPlayer: player): boolean;

declare function IsLocationInRegion(whichRegion: region, whichLocation: location): boolean;

declare function IsLocationMaskedToPlayer(whichLocation: location, whichPlayer: player): boolean;

declare function IsLocationVisibleToPlayer(whichLocation: location, whichPlayer: player): boolean;

declare function IsMapFlagSet(whichMapFlag: mapflag): boolean;

declare function IsMaskedToPlayer(x: number, y: number, whichPlayer: player): boolean;

declare function IsMultiboardDisplayed(lb: multiboard): boolean;

declare function IsMultiboardMinimized(lb: multiboard): boolean;

declare function IsNoDefeatCheat(): boolean;

declare function IsNoVictoryCheat(): boolean;

declare function IsPlayerAlly(whichPlayer: player, otherPlayer: player): boolean;

declare function IsPlayerEnemy(whichPlayer: player, otherPlayer: player): boolean;

declare function IsPlayerInForce(whichPlayer: player, whichForce: force): boolean;

declare function IsPlayerObserver(whichPlayer: player): boolean;

declare function IsPlayerRacePrefSet(whichPlayer: player, pref: racepreference): boolean;

declare function IsPointBlighted(x: number, y: number): boolean;

declare function IsPointInRegion(whichRegion: region, x: number, y: number): boolean;

declare function IsQuestCompleted(whichQuest: quest): boolean;

declare function IsQuestDiscovered(whichQuest: quest): boolean;

declare function IsQuestEnabled(whichQuest: quest): boolean;

declare function IsQuestFailed(whichQuest: quest): boolean;

declare function IsQuestItemCompleted(whichQuestItem: questitem): boolean;

declare function IsQuestRequired(whichQuest: quest): boolean;

declare function IssueBuildOrder(whichPeon: unit, unitToBuild: string, x: number, y: number): boolean;

declare function IssueBuildOrderById(whichPeon: unit, unitId: number, x: number, y: number): boolean;

declare function IssueImmediateOrder(whichUnit: unit, order: string): boolean;

declare function IssueImmediateOrderById(whichUnit: unit, order: number): boolean;

declare function IssueInstantPointOrder(whichUnit: unit, order: string, x: number, y: number, instantTargetWidget: widget): boolean;

declare function IssueInstantPointOrderById(whichUnit: unit, order: number, x: number, y: number, instantTargetWidget: widget): boolean;

declare function IssueInstantTargetOrder(whichUnit: unit, order: string, targetWidget: widget, instantTargetWidget: widget): boolean;

declare function IssueInstantTargetOrderById(whichUnit: unit, order: number, targetWidget: widget, instantTargetWidget: widget): boolean;

declare function IssueNeutralImmediateOrder(forWhichPlayer: player, neutralStructure: unit, unitToBuild: string): boolean;

declare function IssueNeutralImmediateOrderById(forWhichPlayer: player, neutralStructure: unit, unitId: number): boolean;

declare function IssueNeutralPointOrder(forWhichPlayer: player, neutralStructure: unit, unitToBuild: string, x: number, y: number): boolean;

declare function IssueNeutralPointOrderById(forWhichPlayer: player, neutralStructure: unit, unitId: number, x: number, y: number): boolean;

declare function IssueNeutralTargetOrder(forWhichPlayer: player, neutralStructure: unit, unitToBuild: string, target: widget): boolean;

declare function IssueNeutralTargetOrderById(forWhichPlayer: player, neutralStructure: unit, unitId: number, target: widget): boolean;

declare function IssuePointOrder(whichUnit: unit, order: string, x: number, y: number): boolean;

declare function IssuePointOrderById(whichUnit: unit, order: number, x: number, y: number): boolean;

declare function IssuePointOrderByIdLoc(whichUnit: unit, order: number, whichLocation: location): boolean;

declare function IssuePointOrderLoc(whichUnit: unit, order: string, whichLocation: location): boolean;

declare function IssueTargetOrder(whichUnit: unit, order: string, targetWidget: widget): boolean;

declare function IssueTargetOrderById(whichUnit: unit, order: number, targetWidget: widget): boolean;

declare function IsSuspendedXP(whichHero: unit): boolean;

declare function IsTerrainPathable(x: number, y: number, t: pathingtype): boolean;

declare function IsTimerDialogDisplayed(whichDialog: timerdialog): boolean;

declare function IsTriggerEnabled(whichTrigger: trigger): boolean;

declare function IsTriggerWaitOnSleeps(whichTrigger: trigger): boolean;

declare function IsUnit(whichUnit: unit, whichSpecifiedUnit: unit): boolean;

declare function IsUnitAlly(whichUnit: unit, whichPlayer: player): boolean;

declare function IsUnitDetected(whichUnit: unit, whichPlayer: player): boolean;

declare function IsUnitEnemy(whichUnit: unit, whichPlayer: player): boolean;

declare function IsUnitFogged(whichUnit: unit, whichPlayer: player): boolean;

declare function IsUnitHidden(whichUnit: unit): boolean;

declare function IsUnitIdType(unitId: number, whichUnitType: unittype): boolean;

declare function IsUnitIllusion(whichUnit: unit): boolean;

declare function IsUnitInForce(whichUnit: unit, whichForce: force): boolean;

declare function IsUnitInGroup(whichUnit: unit, whichGroup: group): boolean;

declare function IsUnitInRange(whichUnit: unit, otherUnit: unit, distance: number): boolean;

declare function IsUnitInRangeLoc(whichUnit: unit, whichLocation: location, distance: number): boolean;

declare function IsUnitInRangeXY(whichUnit: unit, x: number, y: number, distance: number): boolean;

declare function IsUnitInRegion(whichRegion: region, whichUnit: unit): boolean;

declare function IsUnitInTransport(whichUnit: unit, whichTransport: unit): boolean;

declare function IsUnitInvisible(whichUnit: unit, whichPlayer: player): boolean;

declare function IsUnitLoaded(whichUnit: unit): boolean;

declare function IsUnitMasked(whichUnit: unit, whichPlayer: player): boolean;

declare function IsUnitOwnedByPlayer(whichUnit: unit, whichPlayer: player): boolean;

declare function IsUnitPaused(whichHero: unit): boolean;

declare function IsUnitRace(whichUnit: unit, whichRace: race): boolean;

declare function IsUnitSelected(whichUnit: unit, whichPlayer: player): boolean;

declare function IsUnitType(whichUnit: unit, whichUnitType: unittype): boolean;

declare function IsUnitVisible(whichUnit: unit, whichPlayer: player): boolean;

declare function IsVisibleToPlayer(x: number, y: number, whichPlayer: player): boolean;

declare function ItemPoolAddItemType(whichItemPool: itempool, itemId: number, weight: number): void;

declare function ItemPoolRemoveItemType(whichItemPool: itempool, itemId: number): void;

declare function KillDestructable(d: destructable): void;

declare function KillSoundWhenDone(soundHandle: sound): void;

declare function KillUnit(whichUnit: unit): void;

declare function LeaderboardAddItem(lb: leaderboard, label: string, value: number, p: player): void;

declare function LeaderboardClear(lb: leaderboard): void;

declare function LeaderboardDisplay(lb: leaderboard, show: boolean): void;

declare function LeaderboardGetItemCount(lb: leaderboard): number;

declare function LeaderboardGetLabelText(lb: leaderboard): string | undefined;

declare function LeaderboardGetPlayerIndex(lb: leaderboard, p: player): number;

declare function LeaderboardHasPlayerItem(lb: leaderboard, p: player): boolean;

declare function LeaderboardRemoveItem(lb: leaderboard, index: number): void;

declare function LeaderboardRemovePlayerItem(lb: leaderboard, p: player): void;

declare function LeaderboardSetItemLabel(lb: leaderboard, whichItem: number, val: string): void;

declare function LeaderboardSetItemLabelColor(lb: leaderboard, whichItem: number, red: number, green: number, blue: number, alpha: number): void;

declare function LeaderboardSetItemStyle(lb: leaderboard, whichItem: number, showLabel: boolean, showValue: boolean, showIcon: boolean): void;

declare function LeaderboardSetItemValue(lb: leaderboard, whichItem: number, val: number): void;

declare function LeaderboardSetItemValueColor(lb: leaderboard, whichItem: number, red: number, green: number, blue: number, alpha: number): void;

declare function LeaderboardSetLabel(lb: leaderboard, label: string): void;

declare function LeaderboardSetLabelColor(lb: leaderboard, red: number, green: number, blue: number, alpha: number): void;

declare function LeaderboardSetSizeByItemCount(lb: leaderboard, count: number): void;

declare function LeaderboardSetStyle(lb: leaderboard, showLabel: boolean, showNames: boolean, showValues: boolean, showIcons: boolean): void;

declare function LeaderboardSetValueColor(lb: leaderboard, red: number, green: number, blue: number, alpha: number): void;

declare function LeaderboardSortItemsByLabel(lb: leaderboard, ascending: boolean): void;

declare function LeaderboardSortItemsByPlayer(lb: leaderboard, ascending: boolean): void;

declare function LeaderboardSortItemsByValue(lb: leaderboard, ascending: boolean): void;

declare function LoadAbilityHandle(table: hashtable, parentKey: number, childKey: number): ability | undefined;

declare function LoadBoolean(table: hashtable, parentKey: number, childKey: number): boolean;

declare function LoadBooleanExprHandle(table: hashtable, parentKey: number, childKey: number): boolexpr | undefined;

declare function LoadButtonHandle(table: hashtable, parentKey: number, childKey: number): button | undefined;

declare function LoadDefeatConditionHandle(table: hashtable, parentKey: number, childKey: number): defeatcondition | undefined;

declare function LoadDestructableHandle(table: hashtable, parentKey: number, childKey: number): destructable | undefined;

declare function LoadDialogHandle(table: hashtable, parentKey: number, childKey: number): dialog | undefined;

declare function LoadEffectHandle(table: hashtable, parentKey: number, childKey: number): effect | undefined;

declare function LoadFogModifierHandle(table: hashtable, parentKey: number, childKey: number): fogmodifier | undefined;

declare function LoadFogStateHandle(table: hashtable, parentKey: number, childKey: number): fogstate | undefined;

declare function LoadForceHandle(table: hashtable, parentKey: number, childKey: number): force | undefined;

declare function LoadGame(saveFileName: string, doScoreScreen: boolean): void;

declare function LoadGroupHandle(table: hashtable, parentKey: number, childKey: number): group | undefined;

declare function LoadHashtableHandle(table: hashtable, parentKey: number, childKey: number): hashtable | undefined;

declare function LoadImageHandle(table: hashtable, parentKey: number, childKey: number): image | undefined;

declare function LoadInteger(table: hashtable, parentKey: number, childKey: number): number;

declare function LoadItemHandle(table: hashtable, parentKey: number, childKey: number): item | undefined;

declare function LoadItemPoolHandle(table: hashtable, parentKey: number, childKey: number): itempool | undefined;

declare function LoadLeaderboardHandle(table: hashtable, parentKey: number, childKey: number): leaderboard | undefined;

declare function LoadLightningHandle(table: hashtable, parentKey: number, childKey: number): lightning | undefined;

declare function LoadLocationHandle(table: hashtable, parentKey: number, childKey: number): location | undefined;

declare function LoadMultiboardHandle(table: hashtable, parentKey: number, childKey: number): multiboard | undefined;

declare function LoadMultiboardItemHandle(table: hashtable, parentKey: number, childKey: number): multiboarditem | undefined;

declare function LoadPlayerHandle(table: hashtable, parentKey: number, childKey: number): player | undefined;

declare function LoadQuestHandle(table: hashtable, parentKey: number, childKey: number): quest | undefined;

declare function LoadQuestItemHandle(table: hashtable, parentKey: number, childKey: number): questitem | undefined;

declare function LoadReal(table: hashtable, parentKey: number, childKey: number): number;

declare function LoadRectHandle(table: hashtable, parentKey: number, childKey: number): rect | undefined;

declare function LoadRegionHandle(table: hashtable, parentKey: number, childKey: number): region | undefined;

declare function LoadSoundHandle(table: hashtable, parentKey: number, childKey: number): sound | undefined;

declare function LoadStr(table: hashtable, parentKey: number, childKey: number): string | undefined;

declare function LoadTextTagHandle(table: hashtable, parentKey: number, childKey: number): texttag | undefined;

declare function LoadTimerDialogHandle(table: hashtable, parentKey: number, childKey: number): timerdialog | undefined;

declare function LoadTimerHandle(table: hashtable, parentKey: number, childKey: number): timer | undefined;

declare function LoadTrackableHandle(table: hashtable, parentKey: number, childKey: number): trackable | undefined;

declare function LoadTriggerActionHandle(table: hashtable, parentKey: number, childKey: number): triggeraction | undefined;

declare function LoadTriggerConditionHandle(table: hashtable, parentKey: number, childKey: number): triggercondition | undefined;

declare function LoadTriggerEventHandle(table: hashtable, parentKey: number, childKey: number): event | undefined;

declare function LoadTriggerHandle(table: hashtable, parentKey: number, childKey: number): trigger | undefined;

declare function LoadUbersplatHandle(table: hashtable, parentKey: number, childKey: number): ubersplat | undefined;

declare function LoadUnitHandle(table: hashtable, parentKey: number, childKey: number): unit | undefined;

declare function LoadUnitPoolHandle(table: hashtable, parentKey: number, childKey: number): unitpool | undefined;

declare function LoadWidgetHandle(table: hashtable, parentKey: number, childKey: number): widget | undefined;

declare function Location(x: number, y: number): location;

declare function MoveLightning(whichBolt: lightning, checkVisibility: boolean, x1: number, y1: number, x2: number, y2: number): boolean;

declare function MoveLightningEx(whichBolt: lightning, checkVisibility: boolean, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;

declare function MoveLocation(whichLocation: location, newX: number, newY: number): void;

declare function MoveRectTo(whichRect: rect, newCenterX: number, newCenterY: number): void;

declare function MoveRectToLoc(whichRect: rect, newCenterLoc: location): void;

declare function MultiboardClear(lb: multiboard): void;

declare function MultiboardDisplay(lb: multiboard, show: boolean): void;

declare function MultiboardGetColumnCount(lb: multiboard): number;

declare function MultiboardGetItem(lb: multiboard, row: number, column: number): multiboarditem | undefined;

declare function MultiboardGetRowCount(lb: multiboard): number;

declare function MultiboardGetTitleText(lb: multiboard): string | undefined;

declare function MultiboardMinimize(lb: multiboard, minimize: boolean): void;

declare function MultiboardReleaseItem(mbi: multiboarditem): void;

declare function MultiboardSetColumnCount(lb: multiboard, count: number): void;

declare function MultiboardSetItemIcon(mbi: multiboarditem, iconFileName: string): void;

declare function MultiboardSetItemsIcon(lb: multiboard, iconPath: string): void;

declare function MultiboardSetItemsStyle(lb: multiboard, showValues: boolean, showIcons: boolean): void;

declare function MultiboardSetItemStyle(mbi: multiboarditem, showValue: boolean, showIcon: boolean): void;

declare function MultiboardSetItemsValue(lb: multiboard, value: string): void;

declare function MultiboardSetItemsValueColor(lb: multiboard, red: number, green: number, blue: number, alpha: number): void;

declare function MultiboardSetItemsWidth(lb: multiboard, width: number): void;

declare function MultiboardSetItemValue(mbi: multiboarditem, val: string): void;

declare function MultiboardSetItemValueColor(mbi: multiboarditem, red: number, green: number, blue: number, alpha: number): void;

declare function MultiboardSetItemWidth(mbi: multiboarditem, width: number): void;

declare function MultiboardSetRowCount(lb: multiboard, count: number): void;

declare function MultiboardSetTitleText(lb: multiboard, label: string): void;

declare function MultiboardSetTitleTextColor(lb: multiboard, red: number, green: number, blue: number, alpha: number): void;

declare function MultiboardSuppressDisplay(flag: boolean): void;

declare function NewSoundEnvironment(environmentName: string): void;

declare function Not(operand: boolexpr): boolexpr;

declare function Or(operandA: boolexpr, operandB: boolexpr): boolexpr;

declare function OrderId(orderIdString: string): number;

declare function OrderId2String(orderId: number): string | undefined;

declare function PanCameraTo(x: number, y: number): void;

declare function PanCameraToTimed(x: number, y: number, duration: number): void;

declare function PanCameraToTimedWithZ(x: number, y: number, zOffsetDest: number, duration: number): void;

declare function PanCameraToWithZ(x: number, y: number, zOffsetDest: number): void;

declare function PauseCompAI(p: player, pause: boolean): void;

declare function PauseGame(flag: boolean): void;

declare function PauseTimer(whichTimer: timer): void;

declare function PauseUnit(whichUnit: unit, flag: boolean): void;

declare function PingMinimap(x: number, y: number, duration: number): void;

declare function PingMinimapEx(x: number, y: number, duration: number, red: number, green: number, blue: number, extraEffects: boolean): void;

declare function PlaceRandomItem(whichItemPool: itempool, x: number, y: number): item | undefined;

declare function PlaceRandomUnit(whichPool: unitpool, forWhichPlayer: player, x: number, y: number, facing: number): unit | undefined;

declare function PlayCinematic(movieName: string): void;

declare function Player(number: number): player | undefined;

declare function PlayerGetLeaderboard(toPlayer: player): leaderboard | undefined;

declare function PlayerSetLeaderboard(toPlayer: player, lb: leaderboard): void;

declare function PlayModelCinematic(modelName: string): void;

declare function PlayMusic(musicName: string): void;

declare function PlayMusicEx(musicName: string, frommsecs: number, fadeinmsecs: number): void;

declare function PlayThematicMusic(musicFileName: string): void;

declare function PlayThematicMusicEx(musicFileName: string, frommsecs: number): void;

declare function Pow(x: number, power: number): number;

declare function Preload(filename: string): void;

declare function PreloadEnd(timeout: number): void;

declare function PreloadEndEx(): void;

declare function Preloader(filename: string): void;

declare function PreloadGenClear(): void;

declare function PreloadGenEnd(filename: string): void;

declare function PreloadGenStart(): void;

declare function PreloadRefresh(): void;

declare function PreloadStart(): void;

declare function QuestCreateItem(whichQuest: quest): questitem | undefined;

declare function QuestItemSetCompleted(whichQuestItem: questitem, completed: boolean): void;

declare function QuestItemSetDescription(whichQuestItem: questitem, description: string): void;

declare function QuestSetCompleted(whichQuest: quest, completed: boolean): void;

declare function QuestSetDescription(whichQuest: quest, description: string): void;

declare function QuestSetDiscovered(whichQuest: quest, discovered: boolean): void;

declare function QuestSetEnabled(whichQuest: quest, enabled: boolean): void;

declare function QuestSetFailed(whichQuest: quest, failed: boolean): void;

declare function QuestSetIconPath(whichQuest: quest, iconPath: string): void;

declare function QuestSetRequired(whichQuest: quest, required: boolean): void;

declare function QuestSetTitle(whichQuest: quest, title: string): void;

declare function QueueDestructableAnimation(d: destructable, whichAnimation: string): void;

declare function QueueUnitAnimation(whichUnit: unit, whichAnimation: string): void;

declare function R2I(r: number): number;

declare function R2S(r: number): string | undefined;

declare function R2SW(r: number, width: number, precision: number): string | undefined;

declare function Rad2Deg(radians: number): number;

declare function Rect(minx: number, miny: number, maxx: number, maxy: number): rect;

declare function RectFromLoc(min: location, max: location): rect | undefined;

declare function RecycleGuardPosition(hUnit: unit): void;

declare function RegionAddCell(whichRegion: region, x: number, y: number): void;

declare function RegionAddCellAtLoc(whichRegion: region, whichLocation: location): void;

declare function RegionAddRect(whichRegion: region, r: rect): void;

declare function RegionClearCell(whichRegion: region, x: number, y: number): void;

declare function RegionClearCellAtLoc(whichRegion: region, whichLocation: location): void;

declare function RegionClearRect(whichRegion: region, r: rect): void;

declare function RegisterStackedSound(soundHandle: sound, byPosition: boolean, rectwidth: number, rectheight: number): void;

declare function ReloadGame(): void;

declare function ReloadGameCachesFromDisk(): boolean;

declare function RemoveAllGuardPositions(num: player): void;

declare function RemoveDestructable(d: destructable): void;

declare function RemoveGuardPosition(hUnit: unit): void;

declare function RemoveItem(whichItem: item): void;

declare function RemoveItemFromAllStock(itemId: number): void;

declare function RemoveItemFromStock(whichUnit: unit, itemId: number): void;

declare function RemoveLocation(whichLocation: location): void;

declare function RemovePlayer(whichPlayer: player, gameResult: playergameresult): void;

declare function RemoveRect(whichRect: rect): void;

declare function RemoveRegion(whichRegion: region): void;

declare function RemoveSavedBoolean(table: hashtable, parentKey: number, childKey: number): void;

declare function RemoveSavedHandle(table: hashtable, parentKey: number, childKey: number): void;

declare function RemoveSavedInteger(table: hashtable, parentKey: number, childKey: number): void;

declare function RemoveSaveDirectory(sourceDirName: string): boolean;

declare function RemoveSavedReal(table: hashtable, parentKey: number, childKey: number): void;

declare function RemoveSavedString(table: hashtable, parentKey: number, childKey: number): void;

declare function RemoveUnit(whichUnit: unit): void;

declare function RemoveUnitFromAllStock(unitId: number): void;

declare function RemoveUnitFromStock(whichUnit: unit, unitId: number): void;

declare function RemoveWeatherEffect(whichEffect: weathereffect): void;

declare function RenameSaveDirectory(sourceDirName: string, destDirName: string): boolean;

declare function ResetTerrainFog(): void;

declare function ResetToGameCamera(duration: number): void;

declare function ResetTrigger(whichTrigger: trigger): void;

declare function ResetUbersplat(whichSplat: ubersplat): void;

declare function ResetUnitLookAt(whichUnit: unit): void;

declare function RestartGame(doScoreScreen: boolean): void;

declare function RestoreUnit(cache: gamecache, missionKey: string, key: string, forWhichPlayer: player, x: number, y: number, facing: number): unit | undefined;

declare function ResumeMusic(): void;

declare function ResumeTimer(whichTimer: timer): void;

declare function ReviveHero(whichHero: unit, x: number, y: number, doEyecandy: boolean): boolean;

declare function ReviveHeroLoc(whichHero: unit, loc: location, doEyecandy: boolean): boolean;

declare function S2I(s: string): number;

declare function S2R(s: string): number;

declare function SaveAbilityHandle(table: hashtable, parentKey: number, childKey: number, whichAbility: ability): boolean;

declare function SaveAgentHandle(table: hashtable, parentKey: number, childKey: number, whichAgent: agent): boolean;

declare function SaveBoolean(table: hashtable, parentKey: number, childKey: number, value: boolean): void;

declare function SaveBooleanExprHandle(table: hashtable, parentKey: number, childKey: number, whichBoolexpr: boolexpr): boolean;

declare function SaveButtonHandle(table: hashtable, parentKey: number, childKey: number, whichButton: button): boolean;

declare function SaveDefeatConditionHandle(table: hashtable, parentKey: number, childKey: number, whichDefeatcondition: defeatcondition): boolean;

declare function SaveDestructableHandle(table: hashtable, parentKey: number, childKey: number, whichDestructable: destructable): boolean;

declare function SaveDialogHandle(table: hashtable, parentKey: number, childKey: number, whichDialog: dialog): boolean;

declare function SaveEffectHandle(table: hashtable, parentKey: number, childKey: number, whichEffect: effect): boolean;

declare function SaveFogModifierHandle(table: hashtable, parentKey: number, childKey: number, whichFogModifier: fogmodifier): boolean;

declare function SaveFogStateHandle(table: hashtable, parentKey: number, childKey: number, whichFogState: fogstate): boolean;

declare function SaveForceHandle(table: hashtable, parentKey: number, childKey: number, whichForce: force): boolean;

declare function SaveGame(saveFileName: string): void;

declare function SaveGameCache(whichCache: gamecache): boolean;

declare function SaveGameExists(saveName: string): boolean;

declare function SaveGroupHandle(table: hashtable, parentKey: number, childKey: number, whichGroup: group): boolean;

declare function SaveHashtableHandle(table: hashtable, parentKey: number, childKey: number, whichHashtable: hashtable): boolean;

declare function SaveImageHandle(table: hashtable, parentKey: number, childKey: number, whichImage: image): boolean;

declare function SaveInteger(table: hashtable, parentKey: number, childKey: number, value: number): void;

declare function SaveItemHandle(table: hashtable, parentKey: number, childKey: number, whichItem: item): boolean;

declare function SaveItemPoolHandle(table: hashtable, parentKey: number, childKey: number, whichItempool: itempool): boolean;

declare function SaveLeaderboardHandle(table: hashtable, parentKey: number, childKey: number, whichLeaderboard: leaderboard): boolean;

declare function SaveLightningHandle(table: hashtable, parentKey: number, childKey: number, whichLightning: lightning): boolean;

declare function SaveLocationHandle(table: hashtable, parentKey: number, childKey: number, whichLocation: location): boolean;

declare function SaveMultiboardHandle(table: hashtable, parentKey: number, childKey: number, whichMultiboard: multiboard): boolean;

declare function SaveMultiboardItemHandle(table: hashtable, parentKey: number, childKey: number, whichMultiboarditem: multiboarditem): boolean;

declare function SavePlayerHandle(table: hashtable, parentKey: number, childKey: number, whichPlayer: player): boolean;

declare function SaveQuestHandle(table: hashtable, parentKey: number, childKey: number, whichQuest: quest): boolean;

declare function SaveQuestItemHandle(table: hashtable, parentKey: number, childKey: number, whichQuestitem: questitem): boolean;

declare function SaveReal(table: hashtable, parentKey: number, childKey: number, value: number): void;

declare function SaveRectHandle(table: hashtable, parentKey: number, childKey: number, whichRect: rect): boolean;

declare function SaveRegionHandle(table: hashtable, parentKey: number, childKey: number, whichRegion: region): boolean;

declare function SaveSoundHandle(table: hashtable, parentKey: number, childKey: number, whichSound: sound): boolean;

declare function SaveStr(table: hashtable, parentKey: number, childKey: number, value: string): boolean;

declare function SaveTextTagHandle(table: hashtable, parentKey: number, childKey: number, whichTexttag: texttag): boolean;

declare function SaveTimerDialogHandle(table: hashtable, parentKey: number, childKey: number, whichTimerdialog: timerdialog): boolean;

declare function SaveTimerHandle(table: hashtable, parentKey: number, childKey: number, whichTimer: timer): boolean;

declare function SaveTrackableHandle(table: hashtable, parentKey: number, childKey: number, whichTrackable: trackable): boolean;

declare function SaveTriggerActionHandle(table: hashtable, parentKey: number, childKey: number, whichTriggeraction: triggeraction): boolean;

declare function SaveTriggerConditionHandle(table: hashtable, parentKey: number, childKey: number, whichTriggercondition: triggercondition): boolean;

declare function SaveTriggerEventHandle(table: hashtable, parentKey: number, childKey: number, whichEvent: event): boolean;

declare function SaveTriggerHandle(table: hashtable, parentKey: number, childKey: number, whichTrigger: trigger): boolean;

declare function SaveUbersplatHandle(table: hashtable, parentKey: number, childKey: number, whichUbersplat: ubersplat): boolean;

declare function SaveUnitHandle(table: hashtable, parentKey: number, childKey: number, whichUnit: unit): boolean;

declare function SaveUnitPoolHandle(table: hashtable, parentKey: number, childKey: number, whichUnitpool: unitpool): boolean;

declare function SaveWidgetHandle(table: hashtable, parentKey: number, childKey: number, whichWidget: widget): boolean;

declare function SelectHeroSkill(whichHero: unit, abilcode: number): void;

declare function SelectUnit(whichUnit: unit, flag: boolean): void;

declare function SetAllItemTypeSlots(slots: number): void;

declare function SetAllUnitTypeSlots(slots: number): void;

declare function SetAllyColorFilterState(state: number): void;

declare function SetAltMinimapIcon(iconPath: string): void;

declare function SetBlight(whichPlayer: player, x: number, y: number, radius: number, addBlight: boolean): void;

declare function SetBlightLoc(whichPlayer: player, whichLocation: location, radius: number, addBlight: boolean): void;

declare function SetBlightPoint(whichPlayer: player, x: number, y: number, addBlight: boolean): void;

declare function SetBlightRect(whichPlayer: player, r: rect, addBlight: boolean): void;

declare function SetCameraBounds(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): void;

declare function SetCameraField(whichField: camerafield, value: number, duration: number): void;

declare function SetCameraOrientController(whichUnit: unit, xoffset: number, yoffset: number): void;

declare function SetCameraPosition(x: number, y: number): void;

declare function SetCameraQuickPosition(x: number, y: number): void;

declare function SetCameraRotateMode(x: number, y: number, radiansToSweep: number, duration: number): void;

declare function SetCameraTargetController(whichUnit: unit, xoffset: number, yoffset: number, inheritOrientation: boolean): void;

declare function SetCampaignAvailable(campaignNumber: number, available: boolean): void;

declare function SetCampaignMenuRace(r: race): void;

declare function SetCampaignMenuRaceEx(campaignIndex: number): void;

declare function SetCineFilterBlendMode(whichMode: blendmode): void;

declare function SetCineFilterDuration(duration: number): void;

declare function SetCineFilterEndColor(red: number, green: number, blue: number, alpha: number): void;

declare function SetCineFilterEndUV(minu: number, minv: number, maxu: number, maxv: number): void;

declare function SetCineFilterStartColor(red: number, green: number, blue: number, alpha: number): void;

declare function SetCineFilterStartUV(minu: number, minv: number, maxu: number, maxv: number): void;

declare function SetCineFilterTexMapFlags(whichFlags: texmapflags): void;

declare function SetCineFilterTexture(filename: string): void;

declare function SetCinematicCamera(cameraModelFile: string): void;

declare function SetCinematicScene(portraitUnitId: number, color: playercolor, speakerTitle: string, text: string, sceneDuration: number, voiceoverDuration: number): void;

declare function SetCreatureDensity(whichdensity: mapdensity): void;

declare function SetCreepCampFilterState(state: boolean): void;

declare function SetCustomCampaignButtonVisible(whichButton: number, visible: boolean): void;

declare function SetDayNightModels(terrainDNCFile: string, unitDNCFile: string): void;

declare function SetDefaultDifficulty(g: gamedifficulty): void;

declare function SetDestructableAnimation(d: destructable, whichAnimation: string): void;

declare function SetDestructableAnimationSpeed(d: destructable, speedFactor: number): void;

declare function SetDestructableInvulnerable(d: destructable, flag: boolean): void;

declare function SetDestructableLife(d: destructable, life: number): void;

declare function SetDestructableMaxLife(d: destructable, max: number): void;

declare function SetDestructableOccluderHeight(d: destructable, height: number): void;

declare function SetDoodadAnimation(x: number, y: number, radius: number, doodadID: number, nearestOnly: boolean, animName: string, animRandom: boolean): void;

declare function SetDoodadAnimationRect(r: rect, doodadID: number, animName: string, animRandom: boolean): void;

declare function SetEdCinematicAvailable(campaignNumber: number, available: boolean): void;

declare function SetFloatGameState(whichFloatGameState: fgamestate, value: number): void;

declare function SetFogStateRadius(forWhichPlayer: player, whichState: fogstate, centerx: number, centerY: number, radius: number, useSharedVision: boolean): void;

declare function SetFogStateRadiusLoc(forWhichPlayer: player, whichState: fogstate, center: location, radius: number, useSharedVision: boolean): void;

declare function SetFogStateRect(forWhichPlayer: player, whichState: fogstate, where: rect, useSharedVision: boolean): void;

declare function SetGameDifficulty(whichdifficulty: gamedifficulty): void;

declare function SetGamePlacement(whichPlacementType: placement): void;

declare function SetGameSpeed(whichspeed: gamespeed): void;

declare function SetGameTypeSupported(whichGameType: gametype, value: boolean): void;

declare function SetHeroAgi(whichHero: unit, newAgi: number, permanent: boolean): void;

declare function SetHeroInt(whichHero: unit, newInt: number, permanent: boolean): void;

declare function SetHeroLevel(whichHero: unit, level: number, showEyeCandy: boolean): void;

declare function SetHeroStr(whichHero: unit, newStr: number, permanent: boolean): void;

declare function SetHeroXP(whichHero: unit, newXpVal: number, showEyeCandy: boolean): void;

declare function SetImageAboveWater(whichImage: image, flag: boolean, useWaterAlpha: boolean): void;

declare function SetImageColor(whichImage: image, red: number, green: number, blue: number, alpha: number): void;

declare function SetImageConstantHeight(whichImage: image, flag: boolean, height: number): void;

declare function SetImagePosition(whichImage: image, x: number, y: number, z: number): void;

declare function SetImageRender(whichImage: image, flag: boolean): void;

declare function SetImageRenderAlways(whichImage: image, flag: boolean): void;

declare function SetImageType(whichImage: image, imageType: number): void;

declare function SetIntegerGameState(whichIntegerGameState: igamestate, value: number): void;

declare function SetIntroShotModel(introModelPath: string): void;

declare function SetIntroShotText(introText: string): void;

declare function SetItemCharges(whichItem: item, charges: number): void;

declare function SetItemDropID(whichItem: item, unitId: number): void;

declare function SetItemDropOnDeath(whichItem: item, flag: boolean): void;

declare function SetItemDroppable(i: item, flag: boolean): void;

declare function SetItemInvulnerable(whichItem: item, flag: boolean): void;

declare function SetItemPawnable(i: item, flag: boolean): void;

declare function SetItemPlayer(whichItem: item, whichPlayer: player, changeColor: boolean): void;

declare function SetItemPosition(i: item, x: number, y: number): void;

declare function SetItemTypeSlots(whichUnit: unit, slots: number): void;

declare function SetItemUserData(whichItem: item, data: number): void;

declare function SetItemVisible(whichItem: item, show: boolean): void;

declare function SetLightningColor(whichBolt: lightning, r: number, g: number, b: number, a: number): boolean;

declare function SetMapDescription(description: string): void;

declare function SetMapFlag(whichMapFlag: mapflag, value: boolean): void;

declare function SetMapMusic(musicName: string, random: boolean, index: number): void;

declare function SetMapName(name: string): void;

declare function SetMissionAvailable(campaignNumber: number, missionNumber: number, available: boolean): void;

declare function SetMusicPlayPosition(millisecs: number): void;

declare function SetMusicVolume(volume: number): void;

declare function SetOpCinematicAvailable(campaignNumber: number, available: boolean): void;

declare function SetPlayerAbilityAvailable(whichPlayer: player, abilid: number, avail: boolean): void;

declare function SetPlayerAlliance(sourcePlayer: player, otherPlayer: player, whichAllianceSetting: alliancetype, value: boolean): void;

declare function SetPlayerColor(whichPlayer: player, color: playercolor): void;

declare function SetPlayerController(whichPlayer: player, controlType: mapcontrol): void;

declare function SetPlayerHandicap(whichPlayer: player, handicap: number): void;

declare function SetPlayerHandicapXP(whichPlayer: player, handicap: number): void;

declare function SetPlayerName(whichPlayer: player, name: string): void;

declare function SetPlayerOnScoreScreen(whichPlayer: player, flag: boolean): void;

declare function SetPlayerRacePreference(whichPlayer: player, whichRacePreference: racepreference): void;

declare function SetPlayerRaceSelectable(whichPlayer: player, value: boolean): void;

declare function SetPlayers(playercount: number): void;

declare function SetPlayerStartLocation(whichPlayer: player, startLocIndex: number): void;

declare function SetPlayerState(whichPlayer: player, whichPlayerState: playerstate, value: number): void;

declare function SetPlayerTaxRate(sourcePlayer: player, otherPlayer: player, whichResource: playerstate, rate: number): void;

declare function SetPlayerTeam(whichPlayer: player, whichTeam: number): void;

declare function SetPlayerTechMaxAllowed(whichPlayer: player, techid: number, maximum: number): void;

declare function SetPlayerTechResearched(whichPlayer: player, techid: number, setToLevel: number): void;

declare function SetPlayerUnitsOwner(whichPlayer: player, newOwner: number): void;

declare function SetRandomSeed(seed: number): void;

declare function SetRect(whichRect: rect, minx: number, miny: number, maxx: number, maxy: number): void;

declare function SetRectFromLoc(whichRect: rect, min: location, max: location): void;

declare function SetReservedLocalHeroButtons(reserved: number): void;

declare function SetResourceAmount(whichUnit: unit, amount: number): void;

declare function SetResourceDensity(whichdensity: mapdensity): void;

declare function SetSkyModel(skyModelFile: string): void;

declare function SetSoundChannel(soundHandle: sound, channel: number): void;

declare function SetSoundConeAngles(soundHandle: sound, inside: number, outside: number, outsideVolume: number): void;

declare function SetSoundConeOrientation(soundHandle: sound, x: number, y: number, z: number): void;

declare function SetSoundDistanceCutoff(soundHandle: sound, cutoff: number): void;

declare function SetSoundDistances(soundHandle: sound, minDist: number, maxDist: number): void;

declare function SetSoundDuration(soundHandle: sound, duration: number): void;

declare function SetSoundParamsFromLabel(soundHandle: sound, soundLabel: string): void;

declare function SetSoundPitch(soundHandle: sound, pitch: number): void;

declare function SetSoundPlayPosition(soundHandle: sound, millisecs: number): void;

declare function SetSoundPosition(soundHandle: sound, x: number, y: number, z: number): void;

declare function SetSoundVelocity(soundHandle: sound, x: number, y: number, z: number): void;

declare function SetSoundVolume(soundHandle: sound, volume: number): void;

declare function SetStartLocPrio(whichStartLoc: number, prioSlotIndex: number, otherStartLocIndex: number, priority: startlocprio): void;

declare function SetStartLocPrioCount(whichStartLoc: number, prioSlotCount: number): void;

declare function SetTeams(teamcount: number): void;

declare function SetTerrainFog(a: number, b: number, c: number, d: number, e: number): void;

declare function SetTerrainFogEx(style: number, zstart: number, zend: number, density: number, red: number, green: number, blue: number): void;

declare function SetTerrainPathable(x: number, y: number, t: pathingtype, flag: boolean): void;

declare function SetTerrainType(x: number, y: number, terrainType: number, variation: number, area: number, shape: number): void;

declare function SetTextTagAge(t: texttag, age: number): void;

declare function SetTextTagColor(t: texttag, red: number, green: number, blue: number, alpha: number): void;

declare function SetTextTagFadepoint(t: texttag, fadepoint: number): void;

declare function SetTextTagLifespan(t: texttag, lifespan: number): void;

declare function SetTextTagPermanent(t: texttag, flag: boolean): void;

declare function SetTextTagPos(t: texttag, x: number, y: number, heightOffset: number): void;

declare function SetTextTagPosUnit(t: texttag, whichUnit: unit, heightOffset: number): void;

declare function SetTextTagSuspended(t: texttag, flag: boolean): void;

declare function SetTextTagText(t: texttag, s: string, height: number): void;

declare function SetTextTagVelocity(t: texttag, xvel: number, yvel: number): void;

declare function SetTextTagVisibility(t: texttag, flag: boolean): void;

declare function SetThematicMusicPlayPosition(millisecs: number): void;

declare function SetTimeOfDayScale(r: number): void;

declare function SetTutorialCleared(cleared: boolean): void;

declare function SetUbersplatRender(whichSplat: ubersplat, flag: boolean): void;

declare function SetUbersplatRenderAlways(whichSplat: ubersplat, flag: boolean): void;

declare function SetUnitAbilityLevel(whichUnit: unit, abilcode: number, level: number): number;

declare function SetUnitAcquireRange(whichUnit: unit, newAcquireRange: number): void;

declare function SetUnitAnimation(whichUnit: unit, whichAnimation: string): void;

declare function SetUnitAnimationByIndex(whichUnit: unit, whichAnimation: number): void;

declare function SetUnitAnimationWithRarity(whichUnit: unit, whichAnimation: string, rarity: raritycontrol): void;

declare function SetUnitBlendTime(whichUnit: unit, blendTime: number): void;

declare function SetUnitColor(whichUnit: unit, whichColor: playercolor): void;

declare function SetUnitCreepGuard(whichUnit: unit, creepGuard: boolean): void;

declare function SetUnitExploded(whichUnit: unit, exploded: boolean): void;

declare function SetUnitFacing(whichUnit: unit, facingAngle: number): void;

declare function SetUnitFacingTimed(whichUnit: unit, facingAngle: number, duration: number): void;

declare function SetUnitFlyHeight(whichUnit: unit, newHeight: number, rate: number): void;

declare function SetUnitFog(a: number, b: number, c: number, d: number, e: number): void;

declare function SetUnitInvulnerable(whichUnit: unit, flag: boolean): void;

declare function SetUnitLookAt(whichUnit: unit, whichBone: string, lookAtTarget: unit, offsetX: number, offsetY: number, offsetZ: number): void;

declare function SetUnitMoveSpeed(whichUnit: unit, newSpeed: number): void;

declare function SetUnitOwner(whichUnit: unit, whichPlayer: player, changeColor: boolean): void;

declare function SetUnitPathing(whichUnit: unit, flag: boolean): void;

declare function SetUnitPosition(whichUnit: unit, newX: number, newY: number): void;

declare function SetUnitPositionLoc(whichUnit: unit, whichLocation: location): void;

declare function SetUnitPropWindow(whichUnit: unit, newPropWindowAngle: number): void;

declare function SetUnitRescuable(whichUnit: unit, byWhichPlayer: player, flag: boolean): void;

declare function SetUnitRescueRange(whichUnit: unit, range: number): void;

declare function SetUnitScale(whichUnit: unit, scaleX: number, scaleY: number, scaleZ: number): void;

declare function SetUnitState(whichUnit: unit, whichUnitState: unitstate, newVal: number): void;

declare function SetUnitTimeScale(whichUnit: unit, timeScale: number): void;

declare function SetUnitTurnSpeed(whichUnit: unit, newTurnSpeed: number): void;

declare function SetUnitTypeSlots(whichUnit: unit, slots: number): void;

declare function SetUnitUseFood(whichUnit: unit, useFood: boolean): void;

declare function SetUnitUserData(whichUnit: unit, data: number): void;

declare function SetUnitVertexColor(whichUnit: unit, red: number, green: number, blue: number, alpha: number): void;

declare function SetUnitX(whichUnit: unit, newX: number): void;

declare function SetUnitY(whichUnit: unit, newY: number): void;

declare function SetWaterBaseColor(red: number, green: number, blue: number, alpha: number): void;

declare function SetWaterDeforms(val: boolean): void;

declare function SetWidgetLife(whichWidget: widget, newLife: number): void;

declare function ShowDestructable(d: destructable, flag: boolean): void;

declare function ShowImage(whichImage: image, flag: boolean): void;

declare function ShowInterface(flag: boolean, fadeDuration: number): void;

declare function ShowUbersplat(whichSplat: ubersplat, flag: boolean): void;

declare function ShowUnit(whichUnit: unit, show: boolean): void;

declare function Sin(radians: number): number;

declare function SquareRoot(x: number): number;

declare function StartCampaignAI(num: player, script: string): void;

declare function StartMeleeAI(num: player, script: string): void;

declare function StartSound(soundHandle: sound): void;

declare function StopCamera(): void;

declare function StopMusic(fadeOut: boolean): void;

declare function StopSound(soundHandle: sound, killWhenDone: boolean, fadeOut: boolean): void;

declare function StoreBoolean(cache: gamecache, missionKey: string, key: string, value: boolean): void;

declare function StoreInteger(cache: gamecache, missionKey: string, key: string, value: number): void;

declare function StoreReal(cache: gamecache, missionKey: string, key: string, value: number): void;

declare function StoreString(cache: gamecache, missionKey: string, key: string, value: string): boolean;

declare function StoreUnit(cache: gamecache, missionKey: string, key: string, whichUnit: unit): boolean;

declare function StringCase(source: string, upper: boolean): string | undefined;

declare function StringHash(s: string): number;

declare function StringLength(s: string): number;

declare function SubString(source: string, start: number, end: number): string | undefined;

declare function SuspendHeroXP(whichHero: unit, flag: boolean): void;

declare function SuspendTimeOfDay(b: boolean): void;

declare function SyncSelections(): void;

declare function SyncStoredBoolean(cache: gamecache, missionKey: string, key: string): void;

declare function SyncStoredInteger(cache: gamecache, missionKey: string, key: string): void;

declare function SyncStoredReal(cache: gamecache, missionKey: string, key: string): void;

declare function SyncStoredString(cache: gamecache, missionKey: string, key: string): void;

declare function SyncStoredUnit(cache: gamecache, missionKey: string, key: string): void;

declare function Tan(radians: number): number;

declare function TerrainDeformCrater(x: number, y: number, radius: number, depth: number, duration: number, permanent: boolean): terraindeformation | undefined;

declare function TerrainDeformRandom(x: number, y: number, radius: number, minDelta: number, maxDelta: number, duration: number, updateInterval: number): terraindeformation | undefined;

declare function TerrainDeformRipple(x: number, y: number, radius: number, depth: number, duration: number, count: number, spaceWaves: number, timeWaves: number, radiusStartPct: number, limitNeg: boolean): terraindeformation | undefined;

declare function TerrainDeformStop(deformation: terraindeformation, duration: number): void;

declare function TerrainDeformStopAll(): void;

declare function TerrainDeformWave(x: number, y: number, dirX: number, dirY: number, distance: number, speed: number, radius: number, depth: number, trailTime: number, count: number): terraindeformation | undefined;

declare function TimerDialogDisplay(whichDialog: timerdialog, display: boolean): void;

declare function TimerDialogSetRealTimeRemaining(whichDialog: timerdialog, timeRemaining: number): void;

declare function TimerDialogSetSpeed(whichDialog: timerdialog, speedMultFactor: number): void;

declare function TimerDialogSetTimeColor(whichDialog: timerdialog, red: number, green: number, blue: number, alpha: number): void;

declare function TimerDialogSetTitle(whichDialog: timerdialog, title: string): void;

declare function TimerDialogSetTitleColor(whichDialog: timerdialog, red: number, green: number, blue: number, alpha: number): void;

declare function TimerGetElapsed(whichTimer: timer): number;

declare function TimerGetRemaining(whichTimer: timer): number;

declare function TimerGetTimeout(whichTimer: timer): number;

declare function TimerStart(whichTimer: timer, timeout: number, periodic: boolean, handlerFunc: () => void): void;

declare function TriggerAddAction(whichTrigger: trigger, actionFunc: () => void): triggeraction;

declare function TriggerAddCondition(whichTrigger: trigger, condition: boolexpr): triggercondition | undefined;

declare function TriggerClearActions(whichTrigger: trigger): void;

declare function TriggerClearConditions(whichTrigger: trigger): void;

declare function TriggerEvaluate(whichTrigger: trigger): boolean;

declare function TriggerExecute(whichTrigger: trigger): void;

declare function TriggerExecuteWait(whichTrigger: trigger): void;

declare function TriggerRegisterDeathEvent(whichTrigger: trigger, whichWidget: widget): event | undefined;

declare function TriggerRegisterDialogButtonEvent(whichTrigger: trigger, whichButton: button): event | undefined;

declare function TriggerRegisterDialogEvent(whichTrigger: trigger, whichDialog: dialog): event | undefined;

declare function TriggerRegisterEnterRegion(whichTrigger: trigger, whichRegion: region, filter?: boolexpr): event | undefined;

declare function TriggerRegisterFilterUnitEvent(whichTrigger: trigger, whichUnit: unit, whichEvent: unitevent, filter?: boolexpr): event | undefined;

declare function TriggerRegisterGameEvent(whichTrigger: trigger, whichGameEvent: gameevent): event | undefined;

declare function TriggerRegisterGameStateEvent(whichTrigger: trigger, whichState: gamestate, opcode: limitop, limitval: number): event | undefined;

declare function TriggerRegisterLeaveRegion(whichTrigger: trigger, whichRegion: region, filter?: boolexpr): event | undefined;

declare function TriggerRegisterPlayerAllianceChange(whichTrigger: trigger, whichPlayer: player, whichAlliance: alliancetype): event | undefined;

declare function TriggerRegisterPlayerChatEvent(whichTrigger: trigger, whichPlayer: player, chatMessageToDetect: string, exactMatchOnly: boolean): event | undefined;

declare function TriggerRegisterPlayerEvent(whichTrigger: trigger, whichPlayer: player, whichPlayerEvent: playerevent): event | undefined;

declare function TriggerRegisterPlayerStateEvent(whichTrigger: trigger, whichPlayer: player, whichState: playerstate, opcode: limitop, limitval: number): event | undefined;

declare function TriggerRegisterPlayerUnitEvent(whichTrigger: trigger, whichPlayer: player, whichPlayerUnitEvent: playerunitevent, filter?: boolexpr): event | undefined;

declare function TriggerRegisterTimerEvent(whichTrigger: trigger, timeout: number, periodic: boolean): event | undefined;

declare function TriggerRegisterTimerExpireEvent(whichTrigger: trigger, t: timer): event | undefined;

declare function TriggerRegisterTrackableHitEvent(whichTrigger: trigger, t: trackable): event | undefined;

declare function TriggerRegisterTrackableTrackEvent(whichTrigger: trigger, t: trackable): event | undefined;

declare function TriggerRegisterUnitEvent(whichTrigger: trigger, whichUnit: unit, whichEvent: unitevent): event | undefined;

declare function TriggerRegisterUnitInRange(whichTrigger: trigger, whichUnit: unit, range: number, filter?: boolexpr): event | undefined;

declare function TriggerRegisterUnitStateEvent(whichTrigger: trigger, whichUnit: unit, whichState: unitstate, opcode: limitop, limitval: number): event | undefined;

declare function TriggerRegisterVariableEvent(whichTrigger: trigger, varName: string, opcode: limitop, limitval: number): event | undefined;

declare function TriggerRemoveAction(whichTrigger: trigger, whichAction: triggeraction): void;

declare function TriggerRemoveCondition(whichTrigger: trigger, whichCondition: triggercondition): void;

declare function TriggerSleepAction(timeout: number): void;

declare function TriggerSyncReady(): void;

declare function TriggerSyncStart(): void;

declare function TriggerWaitForSound(s: sound, offset: number): void;

declare function TriggerWaitOnSleeps(whichTrigger: trigger, flag: boolean): void;

declare function UnitAddAbility(whichUnit: unit, abilityId: number): boolean;

declare function UnitAddIndicator(whichUnit: unit, red: number, green: number, blue: number, alpha: number): void;

declare function UnitAddItem(whichUnit: unit, whichItem: item): boolean;

declare function UnitAddItemById(whichUnit: unit, itemId: number): item | undefined;

declare function UnitAddItemToSlotById(whichUnit: unit, itemId: number, itemSlot: number): boolean;

declare function UnitAddSleep(whichUnit: unit, add: boolean): void;

declare function UnitAddSleepPerm(whichUnit: unit, add: boolean): void;

declare function UnitAddType(whichUnit: unit, whichUnitType: unittype): boolean;

declare function UnitApplyTimedLife(whichUnit: unit, buffId: number, duration: number): void;

declare function UnitCanSleep(whichUnit: unit): boolean;

declare function UnitCanSleepPerm(whichUnit: unit): boolean;

declare function UnitCountBuffsEx(whichUnit: unit, removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean): number;

declare function UnitDamagePoint(whichUnit: unit, delay: number, radius: number, x: number, y: number, amount: number, attack: boolean, ranged: boolean, attackType: attacktype, damageType: damagetype, weaponType: weapontype): boolean;

declare function UnitDamageTarget(whichUnit: unit, target: widget, amount: number, attack: boolean, ranged: boolean, attackType: attacktype, damageType: damagetype, weaponType: weapontype): boolean;

declare function UnitDropItemPoint(whichUnit: unit, whichItem: item, x: number, y: number): boolean;

declare function UnitDropItemSlot(whichUnit: unit, whichItem: item, slot: number): boolean;

declare function UnitDropItemTarget(whichUnit: unit, whichItem: item, target: widget): boolean;

declare function UnitHasBuffsEx(whichUnit: unit, removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean): boolean;

declare function UnitHasItem(whichUnit: unit, whichItem: item): boolean;

declare function UnitId(unitIdString: string): number;

declare function UnitId2String(unitId: number): string | undefined;

declare function UnitIgnoreAlarm(whichUnit: unit, flag: boolean): boolean;

declare function UnitIgnoreAlarmToggled(whichUnit: unit): boolean;

declare function UnitInventorySize(whichUnit: unit): number;

declare function UnitIsSleeping(whichUnit: unit): boolean;

declare function UnitItemInSlot(whichUnit: unit, itemSlot: number): item | undefined;

declare function UnitMakeAbilityPermanent(whichUnit: unit, permanent: boolean, abilityId: number): boolean;

declare function UnitModifySkillPoints(whichHero: unit, skillPointDelta: number): boolean;

declare function UnitPauseTimedLife(whichUnit: unit, flag: boolean): void;

declare function UnitPoolAddUnitType(whichPool: unitpool, unitId: number, weight: number): void;

declare function UnitPoolRemoveUnitType(whichPool: unitpool, unitId: number): void;

declare function UnitRemoveAbility(whichUnit: unit, abilityId: number): boolean;

declare function UnitRemoveBuffs(whichUnit: unit, removePositive: boolean, removeNegative: boolean): void;

declare function UnitRemoveBuffsEx(whichUnit: unit, removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean): void;

declare function UnitRemoveItem(whichUnit: unit, whichItem: item): void;

declare function UnitRemoveItemFromSlot(whichUnit: unit, itemSlot: number): item | undefined;

declare function UnitRemoveType(whichUnit: unit, whichUnitType: unittype): boolean;

declare function UnitResetCooldown(whichUnit: unit): void;

declare function UnitSetConstructionProgress(whichUnit: unit, constructionPercentage: number): void;

declare function UnitSetUpgradeProgress(whichUnit: unit, upgradePercentage: number): void;

declare function UnitSetUsesAltIcon(whichUnit: unit, flag: boolean): void;

declare function UnitShareVision(whichUnit: unit, whichPlayer: player, share: boolean): void;

declare function UnitStripHeroLevel(whichHero: unit, howManyLevels: number): boolean;

declare function UnitSuspendDecay(whichUnit: unit, suspend: boolean): void;

declare function UnitUseItem(whichUnit: unit, whichItem: item): boolean;

declare function UnitUseItemPoint(whichUnit: unit, whichItem: item, x: number, y: number): boolean;

declare function UnitUseItemTarget(whichUnit: unit, whichItem: item, target: widget): boolean;

declare function UnitWakeUp(whichUnit: unit): void;

declare function UnregisterStackedSound(soundHandle: sound, byPosition: boolean, rectwidth: number, rectheight: number): void;

declare function VersionCompatible(whichVersion: version): boolean;

declare function VersionGet(): version | undefined;

declare function VersionSupported(whichVersion: version): boolean;

declare function VolumeGroupReset(): void;

declare function VolumeGroupSetVolume(vgroup: volumegroup, scale: number): void;

declare function WaygateActivate(waygate: unit, activate: boolean): void;

declare function WaygateGetDestinationX(waygate: unit): number;

declare function WaygateGetDestinationY(waygate: unit): number;

declare function WaygateIsActive(waygate: unit): boolean;

declare function WaygateSetDestination(waygate: unit, x: number, y: number): void;

// ===================
// ==== FUNCTIONS ====
// ===================

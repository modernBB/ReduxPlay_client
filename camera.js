{
let camEffects = [
'SwitchHUDIn',
'SwitchHUDOut',
'FocusIn',
'FocusOut',
'MinigameEndNeutral',
'MinigameEndTrevor',
'MinigameEndFranklin',
'MinigameEndMichael',
'MinigameTransitionOut',
'MinigameTransitionIn',
'SwitchShortNeutralIn',
'SwitchShortFranklinIn',
'SwitchShortTrevorIn',
'SwitchShortMichaelIn',
'SwitchOpenMichaelIn',
'SwitchOpenFranklinIn',
'SwitchOpenTrevorIn',
'SwitchHUDMichaelOut',
'SwitchHUDFranklinOut',
'SwitchHUDTrevorOut',
'SwitchShortFranklinMid',
'SwitchShortMichaelMid',
'SwitchShortTrevorMid',
'DeathFailOut',
'CamPushInNeutral',
'CamPushInFranklin',
'CamPushInMichael',
'CamPushInTrevor',
'SwitchOpenMichaelIn',
'SwitchSceneFranklin',
'SwitchSceneTrevor',
'SwitchSceneMichael',
'SwitchSceneNeutral',
'MP_Celeb_Win',
'MP_Celeb_Win_Out',
'MP_Celeb_Lose',
'MP_Celeb_Lose_Out',
'DeathFailNeutralIn',
'DeathFailMPDark',
'DeathFailMPIn',
'MP_Celeb_Preload_Fade',
'PeyoteEndOut',
'PeyoteEndIn',
'PeyoteIn',
'PeyoteOut',
'MP_race_crash',
'SuccessFranklin',
'SuccessTrevor',
'SuccessMichael',
'DrugsMichaelAliensFightIn',
'DrugsMichaelAliensFight',
'DrugsMichaelAliensFightOut',
'DrugsTrevorClownsFightIn',
'DrugsTrevorClownsFight',
'DrugsTrevorClownsFightOut',
'HeistCelebPass',
'HeistCelebPassBW',
'HeistCelebEnd',
'HeistCelebToast',
'MenuMGHeistIn',
'MenuMGTournamentIn',
'MenuMGSelectionIn',
'ChopVision',
'DMT_flight_intro',
'DMT_flight',
'DrugsDrivingIn',
'DrugsDrivingOut',
'SwitchOpenNeutralFIB5',
'HeistLocate',
'MP_job_load',
'RaceTurbo',
'MP_intro_logo',
'HeistTripSkipFade',
'MenuMGHeistOut',
'MP_corona_switch',
'MenuMGSelectionTint',
'SuccessNeutral',
'ExplosionJosh3',
'SniperOverlay',
'RampageOut',
'Rampage',
'Dont_tazeme_bro',
'DeathFailOut'
];

    var instance = null;
    class camera{
        constructor(){
            this.curEffects = [];
        }

        setCameffect(effects){
            for(var o in this.curEffects)
                mp.game.graphics.stopScreenEffect(camEffects[this.curEffects[o]]);
            
            var newEffects = [];
            if(effects.length>0)          
                newEffects = effects;
            else
                newEffects.push(effects);

            for(var i in newEffects)
            {
                mp.game.graphics.startScreenEffect(camEffects[newEffects[i]],0,true);
                this.curEffects.push(newEffects[i]);
            }
        }

        stopAllEffect(){
            for(var i in camEffects)
            {
                mp.game.graphics.stopScreenEffect(camEffects[i]);
            }
        }

        static get(){
            if(instance == null)
                instance = new camera();
            return instance;
        }
    }


    exports = camera.get();
}

/*
-- Характеристики
@ setFaceFeature(id, value)
@ ID:
    @ 0 - нос (-1 маленький, 0 стандартный, 1 большой)
    @ 1 - высота носа (-1 высокий, 0 стандартный, 1 низкий)
    @ 2 - длина носа (-1 длинный, 0 стандартный, 1 короткий)
    @ 3 - профиль носа (-1 выгнутый, 0 стандартный, 1 вогнутый)
    @ 4 - направление носа (-1 вверх, 0 стандартный, 1 вниз)
    @ 5 - искревление переносицы (-1 влево, 0 стандартная, 1 вправо)

    @ 6 - высота лба (-1 высокий, 0 стандартный, 1 низкий)
    @ 7 - выпуклость лба (-1 впалый, 0 стандартный, 1 выпуклый)
        
    @ 8 - высота щек (-1 высокие, 0 стандартные, 1 низкие)
    @ 9 - размер щек (-1 впалые, 0 стандартные, 1 выпуклые)
        
    @ 11 - размер глаз (-1 большие, 0 стандартные, 1 маленькие)
        
    @ 12 - размер губ (-1 большие, 0 стандартные, 1 большие)
    
    @ 13 - размер скул (-1 маленькие, 0 стандартные, 1 большие)
    @ 14 - высота скул (-1 высокие, 0 стандартные, 1 низкие)
        
    @ 15 - высотка подбородка (-1 высокий, 0 стандартный, 1 низкий)
    @ 16 - длина подбородка (-1 короткий, 0 стандартный, 1 длинный)
    @ 17 - форма подборока (-1 острый, 0 стандартный, 1 овальный)
    @ 18 - ямочка на подбородке (0 - ямочка отсутствует, 1 - ямочка присутствует)

    @ 19 - размер шеи (0 - стандартная, 1 - большая)*/
// ==EMEVD==
// @docs    ds3-common.emedf.json
// @compress    DarkSouls3
// @game    DarkSouls3
// @string    N:\FDP\data\Param\event\common_func.emevd       
// @linked    [0]
// ==/EMEVD==

Event(0, Default, function() {
    RegisterBonfire(14100000, 4101950, 5, 180, 0); // Flameless Shrine
    RegisterBonfire(14100001, 4101951, 5, 180, 0); // Kiln of the First Flame
    InitializeEvent(0, 14100100, 0); // Fire Keeper - Setup
    InitializeEvent(0, 14100101, 0); // Fire Keeper - Setup
    InitializeEvent(0, 14105500, 0); // Warp to Kiln path
    InitializeEvent(0, 14105200, 0); // Toggle Cutscene Hollow
    
    // Soul of Cinder
    InitializeEvent(0, 14100800, 0); // Boss Kill
    InitializeEvent(0, 14105810, 0); // Setup
    InitializeEvent(0, 14105811, 0); // Switch Fighting Style
    InitializeEvent(0, 14105812, 0); // Sitting Animation
    InitializeEvent(0, 14005829, 0); // Common Setup
    
    InitializeCommonEvent(20005840, 4101800); // Handle Fog Wall for Player
    InitializeCommonEvent(20005841, 4101800); // Handle Fog Wall for Client Player
    InitializeEvent(1, 14105520, 10012051, 4101521);
    InitializeEvent(2, 14105520, 10012052, 4101522);
    InitializeEvent(3, 14105520, 10012053, 4101523);
    InitializeEvent(4, 14105520, 10012054, 4101524);
    InitializeEvent(5, 14105520, 10012055, 4101525);
    
    // Yuria of Londor - Summon
    InitializeCommonEvent(20005700, 14100800, 14104190, 14105190, 4100190, 4102190);
    InitializeCommonEvent(20005720, 14104190, 14105190, 14100800, 4100190);
    InitializeCommonEvent(20005711, 14104190, 14105805, 4100190, 4102800, 4102805, 14100801);
    InitializeCommonEvent(20005713, 74000640, 14100800, 14104190, 14105190, 4100190);
    InitializeCommonEvent(20005714, 14104190, 14105805, 4100190, 4102806, 14100801);
    
    // Londor Pale Shade - Summon
    InitializeCommonEvent(20005700, 14100800, 14104191, 14105191, 4100191, 4102191);
    InitializeCommonEvent(20005720, 14104191, 14105191, 14100800, 4100191);
    InitializeCommonEvent(20005711, 14104191, 14105805, 4100191, 4102800, 4102805, 14100801);
    InitializeCommonEvent(20005714, 14104191, 14105805, 4100191, 4102806, 14100801);
    
    InitializeEvent(0, 14100050, 0); // Cinders Script
});

Event(50, Default, function() {
    SetMapSoundState(4104800, Disabled);
    SetMapSoundState(4104801, Disabled);
    SetMapSoundState(4104802, Disabled);
    SetEventFlag(14105100, OFF);
    
    InitializeEvent(0, 14105510, 0);
    InitializeEvent(0, 14100050, 0); // Cinders Script
});

// Cinders Setup
Event(14100050, Restart, function() {
    // Lord Zakar
    InitializeCommonEvent(20090010, 4100810, 4102810, 30310, 63010, 13400, 99005400, 99005401, 14100810); // Setup
    InitializeCommonEvent(20009201, 4100810, 85700); // Kill Taunt
    
    // Chests
    InitializeCommonEvent(20005520, 14101200, 4101200, 4104300);
    InitializeCommonEvent(20005520, 14101201, 4101201, 4104301);
    InitializeCommonEvent(20005520, 14101202, 4101202, 4104302);
    InitializeCommonEvent(20005520, 14101203, 4101203, 4104303);
    InitializeCommonEvent(20005520, 14101204, 4101204, 4104304);

    // Curses
    InitializeCommonEvent(20081010, 4105760, 250001002, 25000153); // Curse of Pride
    InitializeCommonEvent(20081010, 4105760, 250001102, 25000152); // Curse of Wrath
    InitializeCommonEvent(20081010, 4105760, 250001402, 25000151); // Curse of Vitality
    InitializeCommonEvent(20081010, 4105760, 250001602, 25000155); // Curse of Fortitude
    InitializeCommonEvent(20081010, 4105760, 250001202, 25000157); // Curse of Frailty
    InitializeCommonEvent(20081000, 4105750, 25000100); // Curse of Attraction
    
    // Status Aux
    InitializeCommonEvent(20090200, 4105760, 112610); // Frostbite
    
    // NG+
    InitializeCommonEvent(20008001, 3005775, 1);
    InitializeCommonEvent(20008001, 3005776, 2);
    InitializeCommonEvent(20008001, 3005777, 3);
    
    // Covenants
    InitializeCommonEvent(20081020, 4105760, 160100400, 160100403); // Company of Champions
    
    // Companion - Setup
    InitializeCommonEvent(20080000, 4100750); // Companion 1
    InitializeCommonEvent(20080000, 4100751); // Companion 2
    InitializeCommonEvent(20080000, 4100752); // Companion 3
    InitializeCommonEvent(20080000, 4100753); // Companion 4
    InitializeCommonEvent(20080000, 4100754); // Companion 5
    InitializeCommonEvent(20080000, 4100755); // Companion 6
    InitializeCommonEvent(20080000, 4100756); // Companion 7
    InitializeCommonEvent(20080000, 4100757); // Companion 8

    // Only load when player is in map
    IfPlayerInoutMap(AND_01, true, 41, 0);
    WaitForConditionGroupState(PASS, AND_01);
    
    // Companion - Summoning
    InitializeCommonEvent(20080001, 4100750, 160760000, 160760211, 41, 0); // Companion 1
    InitializeCommonEvent(20080001, 4100751, 160760001, 160760211, 41, 0); // Companion 2
    InitializeCommonEvent(20080001, 4100752, 160760002, 160760211, 41, 0); // Companion 3
    InitializeCommonEvent(20080001, 4100753, 160760003, 160760211, 41, 0); // Companion 4
    InitializeCommonEvent(20080001, 4100754, 160760004, 160760211, 41, 0); // Companion 5
    InitializeCommonEvent(20080001, 4100755, 160760005, 160760211, 41, 0); // Companion 6
    InitializeCommonEvent(20080001, 4100756, 160760006, 160760211, 41, 0); // Companion 7
    InitializeCommonEvent(20080001, 4100757, 160760007, 160760211, 41, 0); // Companion 8
    
    // Hitless Check
    InitializeEvent(0, 14100051, 0);
});

// Fire Keeper - Setup
Event(14100100, Default, function() {
    ActivateHit(4104101, Disabled);
    ChangeCharacterEnableState(4100100, Disabled);
    SetCharacterAnimationState(4100100, Disabled);
    SetEventFlag(74100100, OFF);
    SetEventFlag(100, OFF);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfBatchEventFlags(EventEndType.End, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 9920, 9923);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 50006020);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14101100);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 14105100);
    CreateObjectfollowingSFX(4101100, 0, 30001);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 101);
    IfMultiplayerState(AND_02, MultiplayerState.LeavingSession);
    IfActionButtonInArea(AND_02, 9341, 4101100);
    IfConditionGroup(MAIN, PASS, AND_02);
    DisplayGenericDialogAndSetEventFlags(10012020, PromptType.YESNO, NumberofOptions.TwoButtons, 4101100, 3, 100, 14105100, 14105100);
    EndIfEventFlag(EventEndType.Restart, OFF, TargetEventFlagType.EventFlag, 100);
    SetEventFlag(100, ON);
    SetEventFlag(101, OFF);
    SetSpeffect(10000, 4900);
    SetSpeffect(10000, 4901);
    SetCharacterImmortality(10000, Enabled);
    SetCharacterImmortality(4100100, Enabled);
    DeleteObjectfollowingSFX(4101100, true);
    ActivateHit(4104100, Disabled);
    ActivateHit(4104103, Enabled);
    WaitFixedTimeFrames(1);
    PlayOngoingCutsceneAndWarpPlayer(41000060, CutscenePlayMode.Skippable, 4102110, 41, 0, 10000, 0, 0);
    WaitFixedTimeFrames(1);
    ChangeCharacterEnableState(4100100, Enabled);
    SetCharacterAnimationState(4100100, Enabled);
    ForceAnimationPlayback(4100100, 30004, true, false, false, 0, 1);
    DeactivateObject(4101952, Disabled);
    ForceAnimationPlayback(10000, 0, false, false, false, 0, 1);
    ActivateHit(4104103, Disabled);
    ActivateHit(4104101, Enabled);
    ActivateHit(4104102, Enabled);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(4100100, 30004, true, false, false, 0, 1);
    IfOngoingCutsceneFinished(MAIN, 4102110);
    IfDamageType(OR_02, 4100100, 10000, DamageType.Unspecified);
    IfConditionGroup(OR_03, PASS, OR_02);
    IfElapsedSeconds(OR_03, 10);
    IfConditionGroup(MAIN, PASS, OR_03);
    SkipIfConditionGroupStateCompiled(1, PASS, OR_02);
    SetEventFlag(74100100, ON);
    SetSpeffect(10000, 4902);
    GotoIfConditionGroupStateCompiled(Label.LABEL0, PASS, OR_02);
    WaitFixedTimeSeconds(4.2);
    AwardAchievement(2);
    DisableLoadingScreenTips(true);
    HideHud(true);
    SetNetworkInteractionState(Enabled);
    SetEventFlag(110, ON);
    SetEventFlag(9922, ON);
    SetEventFlag(22, ON);
    SetEventFlag(6400, ON);
    ClearSpeffect(10000, 4902);
    EndUnconditionally(EventEndType.End);
    Label0();
    PlayCutsceneToPlayer(41000070, CutscenePlayMode.Unskippable, 10000);
    WaitFixedTimeFrames(1);
    HideHud(true);
    SetNetworkInteractionState(Enabled);
    DisableLoadingScreenTips(true);
    SetEventFlag(110, ON);
    SetEventFlag(9923, ON);
    SetEventFlag(23, ON);
    SetEventFlag(6400, ON);
    ClearSpeffect(10000, 4902);
    EndUnconditionally(EventEndType.End);
    InitializeCommonEvent(20011400, 0);
});

// Fire Keeper - Setup
Event(14100101, Default, function() {
    SetEventFlag(101, OFF);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfBatchEventFlags(EventEndType.End, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 9920, 9923);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14101100);
    IfConditionGroup(MAIN, PASS, AND_01);
    DeactivateObject(4101952, Enabled);
    ForceAnimationPlayback(4101952, 11, true, false, false, 0, 1);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 100);
    IfMultiplayerState(AND_02, MultiplayerState.LeavingSession);
    IfActionButtonInArea(AND_02, 9342, 4101952);
    IfConditionGroup(MAIN, PASS, AND_02);
    DisplayGenericDialogAndSetEventFlags(10012021, PromptType.YESNO, NumberofOptions.TwoButtons, 4101952, 3, 101, 14105101, 14105101);
    EndIfEventFlag(EventEndType.Restart, OFF, TargetEventFlagType.EventFlag, 101);
    SetEventFlag(101, ON);
    SetEventFlag(100, OFF);
    ForceAnimationPlayback(4101952, 1, false, false, false, 0, 1);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 490, 9230, 4);
    WaitFixedTimeFrames(1);
    IfEventValue(AND_09, 9230, 4, ComparisonType.Equal, 8);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_09);
    PlayCutsceneToPlayer(41000000, CutscenePlayMode.Unskippable, 10000);
    WaitFixedTimeFrames(1);
    AwardAchievement(1);
    DisableLoadingScreenTips(true);
    SetEventFlag(9920, ON);
    SetEventFlag(20, ON);
    SetEventFlag(110, ON);
    SetEventFlag(6400, ON);
    EndUnconditionally(EventEndType.End);
    Label0();
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 9013);
    PlayCutsceneToPlayer(41000050, CutscenePlayMode.Unskippable, 10000);
    SkipUnconditionally(1);
    PlayCutsceneToPlayer(41000051, CutscenePlayMode.Unskippable, 10000);
    WaitFixedTimeFrames(1);
    AwardAchievement(3);
    DisableLoadingScreenTips(true);
    SetEventFlag(9921, ON);
    SetEventFlag(21, ON);
    SetEventFlag(110, ON);
    SetEventFlag(6400, ON);
    EndUnconditionally(EventEndType.End);
});

Event(14105520, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    IfActionButtonInArea(MAIN, 9356, X4_4);
    DisplayGenericDialog(X0_4, PromptType.OKCANCEL, NumberofOptions.OneButton, X4_4, 3);
    WaitFixedTimeSeconds(3);
    EndUnconditionally(EventEndType.Restart);
});

// Warp to Kiln path
Event(14105500, Default, function() {
    IfActionButtonInArea(MAIN, 9343, 4101101);
    RotateCharacter(10000, 4101101, 91040, false);
    WaitFixedTimeSeconds(3);
    WarpPlayer(41, 0, 4100120);
});

Event(14105510, Restart, function() {
    DeactivateObject(4106102, Disabled);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14100511);
    EndIfConditionGroupStateUncompiled(EventEndType.End, FAIL, AND_01);
    DeactivateObject(4106102, Enabled);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 14100512);
    SetEventFlag(14100512, ON);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_02, false);
    IfMultiplayerState(AND_02, MultiplayerState.LeavingSession);
    IfActionButtonInArea(AND_02, 9344, 4101102);
    IfConditionGroup(MAIN, PASS, AND_02);
    SendAllPhantomsHome(0);
    RotateCharacter(10000, 4101102, 91040, false);
    WaitFixedTimeSeconds(3);
    WarpPlayer(50, 0, 5002110);
    SetEventFlag(14100510, ON);
});

// Toggle Cutscene Hollow
Event(14105200, Restart, function() {
    ChangeCharacterEnableState(4100200, Disabled); // Hollow
});

// Soul of Cinder Kill
Event(14100800, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14100800);
    IfCharacterHPRatio(MAIN, 4100800, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    WaitFixedTimeSeconds(3);
    PlaySE(4100800, SoundType.s_SFX, 777777777);
    IfCharacterDeadalive(MAIN, 4100800, DeathState.Dead, ComparisonType.Equal, 1);
    HandleBossDefeatAndDisplayBanner(4100800, TextBannerType.LordofCinderFallen);
    SetEventFlag(14100800, ON);
    SetEventFlag(14101100, ON);
    SetEventFlag(9321, ON);
    SetEventFlag(6321, ON);
    SpawnOneshotSFX(TargetEntityType.Object, 4101952, 200, 1060);
    InitializeCommonEvent(20020018, 0); // Boss Kill
});

// Soul of Cinder - Setup
Event(14105810, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 14100800);
    ForceCharacterDeath(4100800, false);
    ChangeCharacterEnableState(4100800, Disabled);
    SetCharacterAIState(4100800, Disabled);
    EndUnconditionally(EventEndType.End);
    
    Label0();
    SetCharacterAIState(4100800, Disabled);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 14100801);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfEntityInoutsideRadiusOfEntity(AND_01, InsideOutsideState.Inside, 4100800, 10000, 40, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetNetworkconnectedEventFlag(14100801, ON);
    ForceAnimationPlayback(4100800, 1700, false, true, false, 0, 1);
    GotoUnconditionally(Label.LABEL2);
    
    Label1();
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14105805);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 4102800, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    Label2();
    SetNetworkconnectedEventFlag(14100801, ON);
    SetNetworkconnectedEventFlag(14105807, ON);
    SetCharacterAIState(4100800, Enabled);
    DisplayBossHealthBar(Enabled, 4100800, 0, 905280);
    SetNetworkUpdateRate(4100800, true, CharacterUpdateFrequency.AlwaysUpdate);
    InitializeCommonEvent(20020118, 0); // Boss Start
    
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetNetworkUpdateAuthority(4100800, AuthorityLevel.Forced);
});

// Soul of Cinder - Switch Fighting Style
Event(14105811, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14100800);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14105802);
    SetCharacterImmortality(4100800, Enabled);
    IfCharacterHPRatio(AND_01, 4100800, ComparisonType.LessOrEqual, 0.05, ComparisonType.Equal, 1);
    IfDamageType(AND_01, 4100800, 10000, DamageType.Unspecified);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetNetworkconnectedEventFlag(14105803, ON);
    ForceAnimationPlayback(4100800, 20010, false, true, false, 0, 1);
    ForceAnimationPlayback(4100800, 20005, false, true, false, 0, 1);
    SetNetworkconnectedEventFlag(14105802, ON);
    SetCharacterImmortality(4100800, Disabled);
});

// Soul of Cinder - Sitting Animation
Event(14105812, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14100800);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 14100801);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 14100801);
    ForceAnimationPlayback(4100800, 700, false, false, false, 0, 1);
    Label0();
    IfObjectBackread(MAIN, 4101952, true, ComparisonType.Equal, 1);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(4101952, 100000, false, false, false, 0, 1);
});

Event(14105813, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    SetNetworkSyncState(Disabled);
    SetMapSoundState(X16_4, Disabled);
    SetMapSoundState(X20_4, Disabled);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, X0_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X4_4);
    SkipIfNumberOfClientsOfType(1, ClientType.Coop, ComparisonType.Equal, 0);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X8_4);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, X12_4, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    EnableBossMapSound(X16_4, Enabled);
    Unknown201007(X20_4);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X24_4);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X0_4);
    IfConditionGroup(MAIN, PASS, OR_01);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, X0_4);
    EnableBossMapSound(X20_4, Enabled);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, X0_4);
    Label0();
    EnableBossMapSound(-1, Disabled);
});

// Soul of Cinder - Common Setup
Event(14005829, Restart, function() {
    InitializeCommonEvent(20005800, 14100800, 4101800, 4102800, 14105805, 4101800, 4100800, 14100801, 0);
    InitializeCommonEvent(20005801, 14100800, 4101800, 4102800, 14105805, 4101800, 14105806);
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    InitializeCommonEvent(20001836, 14100800, 14105805, 14105806, 14105807, 4104800, 4104801, 14105802); // Sound State
    SkipUnconditionally(1);
    InitializeCommonEvent(20005831, 14100800, 14105805, 14105806, 4102800, 4104800, 4104801, 14105802);
    InitializeCommonEvent(20005820, 14100800, 4101800, 4, 14100801);
    InitializeCommonEvent(20005810, 14100800, 4101800, 4102800, 10000);
});

Event(14005900, Restart, function() {
    SetEventFlag(74000120, ON);
    SetEventFlag(14101100, ON);
    ClearSpeffect(10000, 4900);
    ClearSpeffect(10000, 4901);
    SetNetworkInteractionState(Enabled);
    HideHud(true);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 100);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 101);
    IfConditionGroup(MAIN, PASS, OR_01);
    ChangeCharacterEnableState(4100800, Disabled);
    SetCharacterAnimationState(4100800, Disabled);
});

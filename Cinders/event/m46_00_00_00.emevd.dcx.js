// ==EMEVD==
// @docs    ds3-common.emedf.json
// @compress    DarkSouls3
// @game    DarkSouls3
// @string    N:\FDP\data\Param\event\common_func.emevd       
// @linked    [0]
// ==/EMEVD==

Event(0, Default, function() {
    // Arena Steup
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 25000061)
    InitializeEvent(0, 14600000, 0);
    DeactivateGenerator(4609000, Disabled);
    
    // Trial of Calamity
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, 25000061)
    SetEventFlag(25000061, OFF);
    SetMapCeremony(40, 0, 0);
    InitializeEvent(0, 14601000, 0);
    
    // Generators
    DeactivateGenerator(4609001, Disabled);
    DeactivateGenerator(4609002, Disabled);
    DeactivateGenerator(4609003, Disabled);
    DeactivateGenerator(4609004, Disabled);
    
    // Boss
    SetCharacterAnimationState(4600910, Disabled);
    ChangeCharacterEnableState(4600910, Disabled);
    
    // Companion - Setup
    InitializeCommonEvent(20080000, 4600750); // Companion 1
    InitializeCommonEvent(20080000, 4600751); // Companion 2
    InitializeCommonEvent(20080000, 4600752); // Companion 3
    InitializeCommonEvent(20080000, 4600753); // Companion 4
    InitializeCommonEvent(20080000, 4600754); // Companion 5
    InitializeCommonEvent(20080000, 4600755); // Companion 6
    InitializeCommonEvent(20080000, 4600756); // Companion 7
    InitializeCommonEvent(20080000, 4600757); // Companion 8
    
    // Only load when player is in map
    IfPlayerInoutMap(AND_01, true, 46, 0);
    WaitForConditionGroupState(PASS, AND_01);
    
    // Companion - Summoning
    InitializeCommonEvent(20080001, 4600750, 160760000, 160760200, 46, 0); // Companion 1
    InitializeCommonEvent(20080001, 4600751, 160760001, 160760200, 46, 0); // Companion 2
    InitializeCommonEvent(20080001, 4600752, 160760002, 160760200, 46, 0); // Companion 3
    InitializeCommonEvent(20080001, 4600753, 160760003, 160760200, 46, 0); // Companion 4
    InitializeCommonEvent(20080001, 4600754, 160760004, 160760200, 46, 0); // Companion 5
    InitializeCommonEvent(20080001, 4600755, 160760005, 160760200, 46, 0); // Companion 6
    InitializeCommonEvent(20080001, 4600756, 160760006, 160760200, 46, 0); // Companion 7
    InitializeCommonEvent(20080001, 4600757, 160760007, 160760200, 46, 0); // Companion 8
});

// Arena
Event(14600000, Default, function() {
    GotoIfHollowArenaMatchType(Label.LABEL0, HollowArenaMatchType.Duel);
    GotoIfHollowArenaMatchType(Label.LABEL1, HollowArenaMatchType.TwoPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL2, HollowArenaMatchType.FourPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL3, HollowArenaMatchType.SixPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL4, HollowArenaMatchType.TwoVersusThree);
    GotoIfHollowArenaMatchType(Label.LABEL5, HollowArenaMatchType.ThreeVersusThree);
    Label0();
    InitializeCommonEvent(20005920, 0, 14605300, 10020000, 10020010);
    InitializeCommonEvent(20005930, 14605300);
    InitializeCommonEvent(20005941, 14605300);
    EndUnconditionally(EventEndType.End);
    Label1();
    InitializeCommonEvent(20005920, 1, 14605300, 10020001, 10020011);
    GotoUnconditionally(Label.LABEL9);
    Label2();
    InitializeCommonEvent(20005920, 2, 14605300, 10020002, 10020012);
    GotoUnconditionally(Label.LABEL9);
    Label3();
    InitializeCommonEvent(20005920, 3, 14605300, 10020003, 10020013);
    GotoUnconditionally(Label.LABEL9);
    Label4();
    InitializeCommonEvent(20005920, 4, 14605300, 10020004, 10020014);
    GotoUnconditionally(Label.LABEL9);
    Label5();
    InitializeCommonEvent(20005920, 5, 14605300, 10020005, 10020015);
    GotoUnconditionally(Label.LABEL9);
    Label9();
    InitializeCommonEvent(20005940, 14605300);
});

// Trial
Event(14601000, Default, function() {
    InitializeEvent(0, 14601010, 0); // Trial
    InitializeEvent(0, 14601020, 0); // Setup Wave Entity
    InitializeEvent(0, 14601030, 0); // Setup Wave Damage
    InitializeEvent(0, 14601040, 0); // Setup Enemy Effects
});

// Trial
Event(14601010, Default, function() {
    WaitFixedTimeSeconds(5.0);
    
    // Wave 1 - Guardians of Lothric
    InitializeEvent(0, 14601011, 4609001, 260200300, 205020); 

    IfCharacterHPRatio(MAIN, 4600900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500200);
    
    WaitFixedTimeSeconds(10.0);
    
    // Wave 2 - Divine Knights of Gertrude
    InitializeEvent(0, 14601011, 4609002, 260200301, 205021); 

    IfCharacterHPRatio(MAIN, 4600900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500210);
    
    WaitFixedTimeSeconds(10.0);
    
    // Wave 3 - Gargoyle Frenzy
    InitializeEvent(0, 14601011, 4609003, 260200302, 205022); 

    IfCharacterHPRatio(MAIN, 4600900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500220);
    
    WaitFixedTimeSeconds(10.0);
    
    // Wave 4 - Crystalline Chaos
    InitializeEvent(0, 14601011, 4609004, 260200303, 205023); 

    IfCharacterHPRatio(MAIN, 4600900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500230);
    
    WaitFixedTimeSeconds(10.0);
    
    // Boss - The Sorrowful Knight
    InitializeEvent(0, 14601012, 4600910, 260200304, 205024); 
    
    IfCharacterHPRatio(MAIN, 4600900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500240);
    
    WaitFixedTimeSeconds(10.0);
    
    // Return
    WarpPlayer(40, 0, 4000970);
});

// Wave State - Wave
Event(14601011, Default, function(X0_4, X4_4, X8_4) {
    SetSpeffect(4600900, X4_4);
    DisplayBossHealthBar(Enabled, 4600900, 0, X8_4);
    DeactivateGenerator(X0_4, Enabled);
    
    IfCharacterHPRatio(MAIN, 4600900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    
    DisplayBossHealthBar(Disabled, 4600900, 0, 905290);
    DeactivateGenerator(X0_4, Disabled);
    
    WaitFixedTimeSeconds(5.0);
});

// Wave State - Boss
Event(14601012, Default, function(X0_4, X4_4, X8_4) {
    SetSpeffect(4600900, X4_4);
    DisplayBossHealthBar(Enabled, 4600900, 0, X8_4);
    
    SetCharacterAnimationState(X0_4, Enabled);
    ChangeCharacterEnableState(X0_4, Enabled);
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 280, 1060);
    
    IfCharacterHPRatio(MAIN, X0_4, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    
    DisplayBossHealthBar(Disabled, X0_4, 0, 905290);
    
    WaitFixedTimeSeconds(5.0);
});

// Setup Wave Entity
Event(14601020, Default, function() {
    SetCharacterAIState(4600900, Disabled);
    SetCharacterGravity(4600900, Disabled);
    SetCharacterAnimationState(4600900, Disabled);
    SetLockOnPoint(4600900, 220, Disabled);
    
    EndUnconditionally(EventEndType.Restart);
});

// Setup Wave Damage
Event(14601030, Default, function() {
    // Setup mechanics
    SkipIfCharacterHasSpeffect(3, 4605761, 260200010, true, ComparisonType.Equal, 1);
    CreateReferredDamagePair(4605761, 4600900); // Tie HP to Wave HP
    SetCharacterAIState(4605761, Enabled); // Enable AI
    SetSpeffect(4605761, 260200010);
    
    // Kill enemy if Wave is over
    IfCharacterHPRatio(AND_01, 4600900, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_01);
    SetSpeffect(4605761, 260200002);

    EndUnconditionally(EventEndType.Restart);
});

// Setup Enemy Effects
Event(14601040, Default, function() {
    InitializeCommonEvent(20081010, 4605761, 250001002, 25000153); // Curse of Pride
    InitializeCommonEvent(20081010, 4605761, 250001102, 25000152); // Curse of Wrath
    InitializeCommonEvent(20081010, 4605761, 250001403, 25000151); // Curse of Vitality
    InitializeCommonEvent(20081010, 4605761, 250001602, 25000155); // Curse of Fortitude
    InitializeCommonEvent(20081010, 4605761, 250001202, 25000157); // Curse of Frailty
    
    // Status Aux
    InitializeCommonEvent(20090200, 4605761, 112610); // Frostbite
    
    SetSpeffect(4605761, 260200390); // General Scaling

    EndUnconditionally(EventEndType.Restart);
});

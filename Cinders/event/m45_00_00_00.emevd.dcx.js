// ==EMEVD==
// @docs    ds3-common.emedf.json
// @compress    DarkSouls3
// @game    DarkSouls3
// @string    N:\FDP\data\Param\event\common_func.emevd       
// @linked    [0]
// ==/EMEVD==

Event(0, Default, function() {
    InitializeCommonEvent(20005500, 14500800, 14500000, 4500950, 4501950); // Sister Friede - Register Bonfire
    InitializeCommonEvent(20005500, 14500860, 14500006, 4500956, 4501956); // The Triad - Register Bonfire
    RegisterBonfire(14500001, 4501951, 5, 180, 0);
    RegisterBonfire(14500002, 4501952, 5, 180, 0);
    RegisterBonfire(14500003, 4501953, 5, 180, 0);
    RegisterBonfire(14500004, 4501954, 5, 180, 0);
    RegisterBonfire(14500005, 4501955, 5, 180, 0);
    RegisterBonfire(14500007, 4501957, 5, 180, 0);
    InitializeCommonEvent(20005270, 4500212, 700, 1700, 13034); // Enemy - Wakeup
    InitializeCommonEvent(20005270, 4500240, 700, 1700, 13034); // Enemy - Wakeup
    InitializeCommonEvent(20005270, 4500241, 701, 1701, 13034); // Enemy - Wakeup
    InitializeCommonEvent(20005360, 4500212, 10000, 13034); // Set Player Event Target
    InitializeCommonEvent(20005360, 4500240, 10000, 13034); // Set Player Event Target
    InitializeCommonEvent(20005360, 4500241, 10000, 13034); // Set Player Event Target
    InitializeEvent(0, 14505240, 4500212, 5024); 
    InitializeEvent(1, 14505240, 4500240, 5024); 
    InitializeEvent(0, 14505280, 0);
    InitializeEvent(0, 14505281, 0);
    InitializeCommonEvent(20005270, 4500242, 700, 1700, 13022); // Enemy - Wakeup
    InitializeCommonEvent(20005270, 4500243, 700, 1700, 13022); // Enemy - Wakeup
    InitializeCommonEvent(20005270, 4500244, 700, 1700, 13022); // Enemy - Wakeup
    InitializeCommonEvent(20005270, 4500211, 701, 1701, 13022); // Enemy - Wakeup
    InitializeEvent(0, 14505290, 4500242, 4502231, 13031);
    InitializeEvent(1, 14505290, 4500243, 4502231, 13031);
    InitializeEvent(2, 14505290, 4500244, 4502231, 13031);
    InitializeEvent(3, 14505290, 4500211, 4502231, 13031);
    InitializeEvent(0, 14505282, 4500242, 4502232);
    InitializeEvent(1, 14505282, 4500243, 4502232);
    InitializeEvent(2, 14505282, 4500244, 4502232);
    InitializeEvent(3, 14505282, 4500211, 4502232);
    InitializeCommonEvent(20005360, 4500242, 10000, 13022); // Set Player Event Target
    InitializeCommonEvent(20005360, 4500243, 10000, 13022); // Set Player Event Target
    InitializeCommonEvent(20005360, 4500244, 10000, 13022); // Set Player Event Target
    InitializeCommonEvent(20005360, 4500211, 10000, 13022); // Set Player Event Target
    InitializeCommonEvent(20005221, 4500210, 701, 1701, 1106247680); // Enemy - Idle State
    InitializeEvent(0, 14505270, 4500247, 700, 1700, 1065353216, 4502236, 20000, 1056964608, 4502235); // Enemy - Wakeup
    InitializeEvent(1, 14505270, 4500248, 700, 1700, 1056964608, 4502236, 20000, 0, 4502235); // Enemy - Wakeup
    InitializeEvent(2, 14505270, 4500249, 700, 1700, 0, 4502236, 20000, 1065353216, 4502235); // Enemy - Wakeup
    InitializeCommonEvent(20005360, 4500247, 10000, 13022); // Set Player Event Target
    InitializeCommonEvent(20005360, 4500248, 10000, 13022); // Set Player Event Target
    InitializeCommonEvent(20005360, 4500249, 10000, 13022); // Set Player Event Target
    InitializeCommonEvent(20005220, 4500214, 700, 1700); // Enemy - Idle State
    InitializeCommonEvent(20005220, 4500215, 700, 1700); // Enemy - Idle State
    InitializeCommonEvent(20005220, 4500216, 700, 1700); // Enemy - Idle State
    InitializeCommonEvent(20005220, 4500245, 701, 1701); // Enemy - Idle State
    InitializeCommonEvent(20005220, 4500246, 700, 1700); // Enemy - Idle State
    InitializeCommonEvent(20005219, 4500218, 701, 1701, 1073741824, 4502285, 1056964608); // Enemy - Wakeup
    InitializeCommonEvent(20005219, 4500251, 700, 1700, 1073741824, 4502285, 1065353216); // Enemy - Wakeup
    InitializeCommonEvent(20005219, 4500252, 700, 1700, 1073741824, 4502285, 0); // Enemy - Wakeup
    InitializeEvent(0, 14505260, 4500219, 30001, 20000, 1056964608, 0, 3006); // Enemy - Wakeup
    InitializeEvent(1, 14505260, 4500253, 30001, 20000, 1067030938, 1097859072, 3006); // Enemy - Wakeup
    InitializeEvent(2, 14505260, 4500254, 30001, 20000, 0, 1101791232, 3009); // Enemy - Wakeup
    InitializeEvent(3, 14505260, 4500255, 30001, 20000, 1060320051, 1101476659, 3009); // Enemy - Wakeup
    InitializeEvent(4, 14505260, 4500256, 30001, 20000, 1045220557, 1087373312, 3009); // Enemy - Wakeup
    InitializeEvent(5, 14505260, 4500257, 30001, 20000, 1067030938, 1086115021, 3009); // Enemy - Wakeup
    InitializeCommonEvent(20006040, 4500219, 4502221, 5450); // Enemy - Warp
    InitializeCommonEvent(20006040, 4500253, 4502222, 5450); // Enemy - Warp
    InitializeCommonEvent(20006040, 4500254, 4502223, 5450); // Enemy - Warp
    InitializeCommonEvent(20006040, 4500255, 4502224, 5450); // Enemy - Warp
    InitializeCommonEvent(20006040, 4500256, 4502225, 5450); // Enemy - Warp
    InitializeCommonEvent(20006040, 4500257, 4502226, 5450); // Enemy - Warp
    InitializeCommonEvent(20005110, 4500594, 4502455); // Enemy - Wakeup
    InitializeCommonEvent(20005110, 4500220, 4502455); // Enemy - Wakeup
    InitializeCommonEvent(20005110, 4500259, 4502455); // Enemy - Wakeup
    InitializeCommonEvent(20005213, 4500260, 700, 1700, 1073741824, 4502460); // Enemy - Wakeup
    InitializeCommonEvent(20005111, 4500258, 3001, 4502456); // Enemy - Wakeup
    InitializeCommonEvent(20005220, 4500250, 701, 1701); // Enemy - Wakeup
    InitializeCommonEvent(20005270, 4500261, 700, 1700, 13022); // Enemy - Wakeup
    InitializeCommonEvent(20005270, 4500262, 701, 1701, 13022); // Enemy - Wakeup
    InitializeCommonEvent(20005360, 4500261, 10000, 13022); // Set Player Event Target
    InitializeCommonEvent(20005360, 4500262, 10000, 13022); // Set Player Event Target
    InitializeEvent(0, 14505200, 0); // Greatwolf Encounter - Field
    InitializeEvent(0, 14505201, 0); // Greatwolf Encounter - Field
    InitializeEvent(0, 14505202, 0); // Greatwolf Encounter - Field
    InitializeEvent(0, 14505203, 0); // Greatwolf Encounter - Field
    InitializeEvent(0, 14505204, 0); // Greatwolf Encounter - Field
    InitializeEvent(0, 14505210, 0); // Greatwolf Encounter - Cliff
    InitializeEvent(0, 14505211, 0); // Greatwolf Encounter - Cliff
    InitializeEvent(0, 14505213, 0); // Greatwolf Encounter - Cliff
    InitializeCommonEvent(20005210, 4500307, 700, 1700, 1090519040); // Enemy - Wakeup
    InitializeCommonEvent(20005210, 4500317, 700, 1700, 1082130432); // Enemy - Wakeup
    InitializeCommonEvent(20005210, 4500318, 700, 1700, 1090519040); // Enemy - Wakeup
    InitializeCommonEvent(20005223, 4500320, 700, 1700, 1065353216); // Enemy - Idle State
    InitializeCommonEvent(20005221, 4500322, 700, 1700, 1091567616); // Enemy - Idle State
    InitializeCommonEvent(20005265, 4500329, 700, 1700, 4500567); // Enemy - Wakeup
    InitializeCommonEvent(20005265, 4500330, 700, 1700, 4500567); // Enemy - Wakeup
    InitializeCommonEvent(20005265, 4500331, 700, 1700, 4500567); // Enemy - Wakeup
    InitializeCommonEvent(20005222, 4500334, 700, 1700, 1086324736, 1069547520); // Enemy - Idle State
    InitializeCommonEvent(20005265, 4500335, 700, 1700, 4500337); // Enemy - Wakeup
    InitializeCommonEvent(20005265, 4500336, 700, 1700, 4500337); // Enemy - Wakeup
    InitializeCommonEvent(20005217, 4500337, 700, 1700, 1077936128, 4502300); // Enemy - Wakeup
    InitializeCommonEvent(20005217, 4500338, 700, 1700, 1077936128, 4502300); // Enemy - Wakeup
    InitializeCommonEvent(20005217, 4500339, 700, 1700, 1077936128, 4502300); // Enemy - Wakeup
    InitializeCommonEvent(20005221, 4500340, 700, 1700, 1099956224); // Enemy - Idle State
    InitializeCommonEvent(20005265, 4500341, 700, 1700, 4500337); // Enemy - Wakeup
    InitializeCommonEvent(20005210, 4500344, 700, 1700, 1085066445); // Enemy - Wakeup
    InitializeCommonEvent(20005212, 4500347, 700, 1700, 1086324736, 4502320); // Enemy - Wakeup
    InitializeCommonEvent(20005212, 4500348, 700, 1700, 1086324736, 4502320); // Enemy - Wakeup
    InitializeEvent(3, 14505300, 4500350, 4500350, 1090519040); // Enemy - Wakeup
    InitializeCommonEvent(20005221, 4500350, 701, 1701, 1086324736); // Enemy - Idle State
    InitializeCommonEvent(20005221, 4500351, 700, 1700, 1090519040); // Enemy - Idle State
    InitializeCommonEvent(20005221, 4500352, 700, 1700, 1090519040); // Enemy - Idle State
    InitializeCommonEvent(20005221, 4500353, 700, 1700, 1090519040); // Enemy - Idle State
    InitializeCommonEvent(20005221, 4500354, 700, 1700, 1098907648); // Enemy - Idle State
    InitializeEvent(1, 14505400, 4500401, 30001, 20001, 4502401, 0); // Enemy - Wakeup
    InitializeCommonEvent(20005119, 4500403, 4502423, 4502424, 0, 0, 0, 0, 0); // Patrol Leader Setup
    InitializeCommonEvent(20005132, 4500404, 1084227584, 4502405); // Enemy - Wakeup
    InitializeCommonEvent(20005110, 4500405, 4502405); // Enemy - Wakeup
    InitializeEvent(7, 14505400, 4500407, 30001, 20001, 4502407, 0); // Enemy - Wakeup
    InitializeEvent(0, 14505410, 0); // Set Enemy Event Target
    InitializeEvent(0, 14505411, 0); // Enemy - Clear SpEffect
    InitializeEvent(0, 14505412, 0); // Enemy - Network Update Rate
    InitializeCommonEvent(20005210, 4500410, 700, 1700, 1077936128); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005210, 4500411, 700, 1700, 1077936128); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005210, 4500412, 700, 1700, 1077936128); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005210, 4500413, 704, 1704, 1077936128); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005201, 4500414, 700, 1700, 4502440, 1077936128); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005210, 4500415, 700, 1700, 1077936128); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005201, 4500416, 700, 1700, 4502440, 1056964608); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005201, 4500417, 700, 1700, 4502440, 1045220557); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005201, 4500418, 700, 1700, 4502440, 1056964608); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005201, 4500419, 700, 1700, 4502440, 1056964608); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005201, 4500420, 701, 1701, 4502440, 1036831949); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005201, 4500421, 701, 1701, 4502440, 1069547520); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005210, 4500422, 701, 1701, 1082130432); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005201, 4500423, 701, 1701, 4502440, 1073741824); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005210, 4500424, 700, 1700, 1077936128); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005210, 4500425, 700, 1700, 1077936128); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005210, 4500426, 700, 1700, 1077936128); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005210, 4500427, 701, 1701, 1077936128); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005210, 4500428, 700, 1700, 1077936128); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005210, 4500429, 700, 1700, 1077936128); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005210, 4500430, 700, 1700, 1077936128); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005201, 4500431, 700, 1700, 4502440, 1056964608); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005201, 4500432, 700, 1700, 4502440, 1065353216); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005201, 4500433, 700, 1700, 4502440, 1053609165); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005210, 4500434, 700, 1700, 1077936128); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005210, 4500435, 700, 1700, 1077936128); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005210, 4500436, 700, 1700, 1077936128); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005211, 4500440, 701, 1701, 1082130432, 1065353216); // Enemy - Wakeup
    InitializeCommonEvent(20005210, 4500441, 705, 1705, 1073741824); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005202, 4500442, 704, 1704, 4502419); // Enemy - Hang
    InitializeCommonEvent(20005133, 4500443, 3015, 1065353216, 4502330); // Enemy - Wakeup
    InitializeCommonEvent(20005133, 4500444, 3016, 1065353216, 4502444); // Enemy - Wakeup
    InitializeCommonEvent(20005220, 4500445, 705, 1705); // Enemy - Idle State
    InitializeCommonEvent(20005260, 4500446, 705, 1705, 4500457); // Enemy - Wakeup
    InitializeCommonEvent(20005210, 4500447, 705, 1705, 1073741824); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005119, 4500448, 4502446, 4502447, 0, 0, 0, 0, 0); // Patrol Leader Setup
    InitializeCommonEvent(20005133, 4500449, 3015, 1077936128, 4502426); // Enemy - Wakeup
    InitializeCommonEvent(20005133, 4500451, 3015, 1077936128, 4502442); // Enemy - Wakeup
    InitializeCommonEvent(20005132, 4500452, 1073741824, 4502445); // Enemy - Wakeup
    InitializeCommonEvent(20005133, 4500453, 3015, 1077936128, 4502426); // Enemy - Wakeup
    InitializeCommonEvent(20005134, 4500454, 3010, 1077936128, 4502441); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005210, 4500458, 701, 1701, 1082130432); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005201, 4500461, 703, 1703, 4502449, 1073741824); // Enemy - Wakeup with anim
    InitializeCommonEvent(20005132, 4500463, 1073741824, 4502428); // Enemy - Wakeup
    InitializeCommonEvent(20005132, 4500464, 1073741824, 4502428); // Enemy - Wakeup
    InitializeCommonEvent(20005132, 4500465, 1073741824, 4502428); // Enemy - Wakeup
    InitializeCommonEvent(20005132, 4500466, 1073741824, 4502428); // Enemy - Wakeup
    InitializeCommonEvent(20005132, 4500468, 1073741824, 4502428); // Enemy - Wakeup
    InitializeCommonEvent(20005132, 4500467, 1073741824, 4502429); // Enemy - Wakeup
    InitializeCommonEvent(20005132, 4500469, 1073741824, 4502429); // Enemy - Wakeup
    InitializeCommonEvent(20005213, 4500474, 701, 1701, 1073741824, 4502421);
    InitializeCommonEvent(20005210, 4500475, 702, 1702, 1073741824);
    InitializeCommonEvent(20005221, 4500476, 701, 1701, 1077936128);
    InitializeCommonEvent(20005201, 4500482, 702, 1702, 4502403, 1073741824);
    InitializeEvent(0, 14505470, 4500460, 708, 20000, 4502421, 1056964608);
    InitializeEvent(2, 14505470, 4500477, 708, 20000, 4502421, 1077936128);
    InitializeEvent(3, 14505470, 4500478, 708, 20000, 4502425, 0);
    InitializeEvent(4, 14505470, 4500450, 708, 20000, 4502448, 0);
    InitializeCommonEvent(20005265, 4500470, 703, 1703, 4500472);
    InitializeCommonEvent(20006040, 4500470, 4502413, 5450);
    InitializeCommonEvent(20005265, 4500471, 702, 1702, 4500472);
    InitializeCommonEvent(20005221, 4500472, 701, 1701, 1086324736);
    InitializeCommonEvent(20005132, 4500480, 1073741824, 4502414);
    InitializeCommonEvent(20005132, 4500481, 1073741824, 4502414);
    InitializeCommonEvent(20005132, 4500487, 1073741824, 4502414);
    InitializeCommonEvent(20005132, 4500488, 1073741824, 4502414);
    InitializeCommonEvent(20005132, 4500489, 1073741824, 4502414);
    InitializeCommonEvent(20005132, 4500490, 1073741824, 4502414);
    InitializeCommonEvent(20005132, 4500491, 1073741824, 4502414);
    InitializeCommonEvent(20005221, 4500492, 707, 1707, 1077936128);
    InitializeCommonEvent(20005265, 4500493, 701, 1701, 4500492);
    InitializeCommonEvent(20005222, 4500494, 700, 1700, 1088421888, 1065353216);
    InitializeCommonEvent(20005221, 4500497, 701, 1701, 1086324736);
    InitializeEvent(1, 14505420, 4500455, 705, 1705, 4505483, 4502431, 4500403);
    InitializeEvent(2, 14505420, 4500456, 705, 1705, 4505483, 4502434, 4500403);
    InitializeEvent(3, 14505420, 4500456, 705, 1705, 4505483, 4502435, 4500403);
    InitializeEvent(0, 14505430, 4500480, 4502430, 4505483, 4500403);
    InitializeEvent(1, 14505430, 4500481, 4502431, 4505483, 4500403);
    InitializeEvent(2, 14505430, 4500483, 4502434, 4505483, 4500403);
    InitializeEvent(3, 14505430, 4500484, 4502435, 4505483, 4500403);
    InitializeEvent(4, 14505430, 4500485, 4502431, 4505483, 4500403);
    InitializeEvent(5, 14505430, 4500486, 4502435, 4505483, 4500403);
    InitializeEvent(6, 14505430, 4500487, 4502434, 4505483, 4500403);
    InitializeEvent(7, 14505430, 4500488, 4502433, 4505483, 4500403);
    InitializeEvent(8, 14505430, 4500489, 4502431, 4505483, 4500403);
    InitializeEvent(9, 14505430, 4500490, 4502432, 4505483, 4500403);
    InitializeEvent(10, 14505430, 4500491, 4502430, 4505483, 4500403);
    InitializeCommonEvent(20005221, 4500390, 700, 1700, 1088421888);
    InitializeCommonEvent(20005201, 4500391, 700, 1700, 4502350, 1065353216);
    InitializeCommonEvent(20005290, 4500381, 700, 1700);
    InitializeCommonEvent(20005290, 4500382, 700, 1700);
    InitializeCommonEvent(20005290, 4500383, 700, 1700);
    InitializeCommonEvent(20005290, 4500384, 700, 1700);
    InitializeCommonEvent(20005290, 4500385, 700, 1700);
    InitializeCommonEvent(20005290, 4500386, 700, 1700);
    InitializeCommonEvent(20005290, 4500387, 700, 1700);
    InitializeCommonEvent(20005200, 4500670, 701, 1701, 4502490);
    InitializeCommonEvent(20005205, 4500671, 702, 1702, 4502490, 1086324736);
    InitializeEvent(1, 14505490, 4500672, 702, 1702);
    InitializeEvent(0, 14505495, 0);
    InitializeCommonEvent(20005110, 4500503, 4502470);
    InitializeCommonEvent(20005110, 4500504, 4502470);
    InitializeCommonEvent(20005119, 4500506, 4502470, 4502471, 0, 0, 0, 0, 0);
    InitializeCommonEvent(20005119, 4500507, 4502470, 4502471, 0, 0, 0, 0, 0);
    InitializeCommonEvent(20005119, 4500508, 4502470, 4502471, 0, 0, 0, 0, 0);
    InitializeEvent(0, 14505383, 0);
    InitializeCommonEvent(20005110, 4500509, 4502281);
    InitializeCommonEvent(20005110, 4500510, 4502281);
    InitializeCommonEvent(20005120, 4500511, 1108869120);
    InitializeCommonEvent(20005110, 4500512, 4502282);
    InitializeCommonEvent(20005110, 4500217, 4502282);
    InitializeCommonEvent(20005110, 4500513, 4502283);
    InitializeCommonEvent(20005110, 4500595, 4502282);
    InitializeCommonEvent(20005110, 4500516, 4502390);
    InitializeCommonEvent(20005110, 4500517, 4502392);
    InitializeCommonEvent(20005110, 4500518, 4502284);
    InitializeCommonEvent(20005110, 4500519, 4502284);
    InitializeEvent(0, 14505380, 0);
    InitializeEvent(0, 14505381, 0);
    InitializeEvent(0, 14505382, 0);
    InitializeCommonEvent(20005119, 4500520, 4502450, 4502451, 4502452, 0, 0, 0, 0);
    InitializeCommonEvent(20005119, 4500525, 4502450, 4502451, 4502452, 0, 0, 0, 0);
    InitializeCommonEvent(20005119, 4500590, 4502450, 4502452, 0, 0, 0, 0, 0);
    InitializeCommonEvent(20005119, 4500591, 4502450, 4502451, 4502452, 0, 0, 0, 0);
    InitializeCommonEvent(20005119, 4500592, 4502450, 4502451, 4502452, 0, 0, 0, 0);
    InitializeCommonEvent(20005220, 4500529, 700, 1700);
    InitializeCommonEvent(20005220, 4500531, 700, 1700);
    InitializeCommonEvent(20005220, 4500535, 700, 1700);
    InitializeCommonEvent(20005220, 4500538, 700, 1700);
    InitializeCommonEvent(20005212, 4500539, 700, 1700, 1086324736, 4502458);
    InitializeCommonEvent(20005212, 4500540, 703, 1703, 1086324736, 4502458);
    InitializeCommonEvent(20005110, 4500543, 4502454);
    InitializeCommonEvent(20005222, 4500545, 700, 1700, 1092616192, 1073741824);
    InitializeCommonEvent(20005222, 4500546, 700, 1700, 1092616192, 1077936128);
    InitializeCommonEvent(20005221, 4500552, 703, 1703, 1091672474);
    InitializeCommonEvent(20005220, 4500556, 701, 1701);
    InitializeCommonEvent(20005134, 4500558, 3007, 1077936128, 4502457);
    InitializeCommonEvent(20005213, 4500559, 700, 1700, 1077936128, 4502457);
    InitializeCommonEvent(20005361, 4500520, 4500521, 10000, 13083, 13080);
    InitializeCommonEvent(20005361, 4500520, 4500522, 10000, 13083, 13080);
    InitializeCommonEvent(20005361, 4500520, 4500523, 10000, 13083, 13080);
    InitializeCommonEvent(20005361, 4500520, 4500524, 10000, 13083, 13080);
    InitializeCommonEvent(20005361, 4500520, 4500525, 10000, 13083, 13080);
    InitializeCommonEvent(20005361, 4500520, 4500526, 10000, 13083, 13080);
    InitializeCommonEvent(20005361, 4500520, 4500527, 10000, 13083, 13080);
    InitializeCommonEvent(20005361, 4500520, 4500533, 10000, 13083, 13080);
    InitializeCommonEvent(20005361, 4500520, 4500538, 10000, 13083, 13080);
    InitializeCommonEvent(20005361, 4500543, 4500541, 10000, 13083, 13080);
    InitializeCommonEvent(20005361, 4500543, 4500542, 10000, 13083, 13080);
    InitializeCommonEvent(20005361, 4500543, 4500543, 10000, 13083, 13080);
    InitializeCommonEvent(20005361, 4500543, 4500544, 10000, 13083, 13080);
    InitializeCommonEvent(20005361, 4500543, 4500547, 10000, 13083, 13080);
    InitializeCommonEvent(20005218, 4500566, 700, 1700, 1101004800, 4502261, 1056964608);
    InitializeCommonEvent(20005218, 4500567, 700, 1700, 1101004800, 4502261, 0);
    InitializeCommonEvent(20005218, 4500568, 700, 1700, 1101004800, 4502261, 1065353216);
    InitializeCommonEvent(20005218, 4500569, 700, 1700, 1101004800, 4502261, 1067030938);
    InitializeCommonEvent(20005120, 4500573, 1108082688);
    InitializeCommonEvent(20005220, 4500574, 701, 1701);
    InitializeCommonEvent(20005213, 4500579, 700, 1700, 1084227584, 4502260);
    InitializeEvent(0, 14505370, 4500576, 700, 1700, 1084227584, 1092616192);
    InitializeEvent(0, 14505360, 0);
    InitializeCommonEvent(20005210, 4500581, 700, 1700, 1106247680);
    InitializeCommonEvent(20005221, 4500585, 700, 1700, 1090519040);
    InitializeCommonEvent(20005221, 4500586, 700, 1700, 1073741824);
    InitializeCommonEvent(20005210, 4500600, 700, 1700, 1090519040);
    InitializeCommonEvent(20005210, 4500603, 700, 1700, 1090519040);
    InitializeCommonEvent(20005215, 4500605, 701, 1701, 1086324736, 0);
    InitializeCommonEvent(20005215, 4500606, 701, 1701, 1082130432, 1065353216);
    InitializeCommonEvent(20005210, 4500607, 700, 1700, 1090519040);
    InitializeCommonEvent(20005221, 4500608, 700, 1700, 1082130432);
    InitializeCommonEvent(20005221, 4500609, 700, 1700, 1084227584);
    InitializeCommonEvent(20005223, 4500610, 700, 1700, 1084227584);
    InitializeCommonEvent(20005220, 4500611, 700, 1700);
    InitializeCommonEvent(20005220, 4500612, 700, 1700);
    InitializeCommonEvent(20005220, 4500613, 700, 1700);
    InitializeCommonEvent(20005220, 4500614, 700, 1700);
    InitializeCommonEvent(20005220, 4500615, 700, 1700);
    InitializeCommonEvent(20005221, 4500616, 700, 1700, 1077936128);
    InitializeCommonEvent(20005221, 4500617, 700, 1700, 1077936128);
    InitializeCommonEvent(20005120, 4500618, 1065353216);
    InitializeCommonEvent(20005220, 4500619, 700, 1700);
    InitializeCommonEvent(20005120, 4500620, 1065353216);
    InitializeCommonEvent(20005202, 4500621, 701, 1701, 4502370);
    InitializeCommonEvent(20005212, 4500622, 700, 1700, 1086324736, 4502372);
    InitializeCommonEvent(20005212, 4500623, 700, 1700, 1086324736, 4502372);
    InitializeCommonEvent(20005212, 4500624, 700, 1700, 1086324736, 4502372);
    InitializeCommonEvent(20005212, 4500625, 700, 1700, 1086324736, 4502372);
    InitializeCommonEvent(20005212, 4500626, 700, 1700, 1086324736, 4502372);
    InitializeCommonEvent(20005212, 4500627, 700, 1700, 1086324736, 4502372);
    InitializeCommonEvent(20005212, 4500628, 700, 1700, 1086324736, 4502372);
    InitializeCommonEvent(20005212, 4500629, 700, 1700, 1086324736, 4502372);
    InitializeCommonEvent(20005212, 4500630, 700, 1700, 1086324736, 4502372);
    InitializeCommonEvent(20005212, 4500631, 700, 1700, 1086324736, 4502372);
    InitializeCommonEvent(20005212, 4500632, 700, 1700, 1086324736, 4502372);
    InitializeCommonEvent(20005212, 4500633, 700, 1700, 1086324736, 4502372);
    InitializeCommonEvent(20005205, 4500634, 701, 1701, 4502372, 1069547520);
    InitializeCommonEvent(20005205, 4500635, 701, 1701, 4502372, 1073741824);
    InitializeCommonEvent(20005212, 4500636, 700, 1700, 1086324736, 4502372);
    InitializeCommonEvent(20005205, 4500637, 701, 1701, 4502372, 1069547520);
    InitializeCommonEvent(20005212, 4500638, 700, 1700, 1086324736, 4502372);
    InitializeCommonEvent(20005212, 4500639, 700, 1700, 1086324736, 4502372);
    InitializeCommonEvent(20005212, 4500640, 700, 1700, 1086324736, 4502372);
    InitializeCommonEvent(20005212, 4500641, 700, 1700, 1086324736, 4502372);
    InitializeCommonEvent(20005205, 4500642, 701, 1701, 4502372, 1087373312);
    InitializeCommonEvent(20005205, 4500643, 701, 1701, 4502372, 1089470464);
    InitializeCommonEvent(20005205, 4500644, 701, 1701, 4502372, 1075838976);
    InitializeCommonEvent(20005205, 4500645, 701, 1701, 4502372, 1082130432);
    InitializeCommonEvent(20005205, 4500646, 701, 1701, 4502372, 1084227584);
    InitializeCommonEvent(20005205, 4500647, 701, 1701, 4502372, 1077936128);
    InitializeCommonEvent(20005205, 4500648, 701, 1701, 4502372, 1077936128);
    InitializeCommonEvent(20005205, 4500649, 701, 1701, 4502372, 1082130432);
    InitializeCommonEvent(20005205, 4500650, 701, 1701, 4502372, 1077936128);
    InitializeCommonEvent(20005205, 4500651, 701, 1701, 4502372, 1073741824);
    InitializeCommonEvent(20005205, 4500652, 701, 1701, 4502372, 1082130432);
    InitializeCommonEvent(20005205, 4500653, 701, 1701, 4502372, 1084227584);
    InitializeCommonEvent(20005341, 14500480, 4500680, 21509600);
    InitializeCommonEvent(20005341, 14500482, 4500682, 21509620);
    InitializeCommonEvent(20005341, 14500484, 4500684, 21509640);
    InitializeCommonEvent(20005341, 14500485, 4500685, 21509650);
    InitializeCommonEvent(20005341, 14500487, 4500687, 21509670);
    InitializeCommonEvent(20005341, 14500488, 4500688, 21509680);
    InitializeCommonEvent(20005341, 14500489, 4500689, 21509690);
    InitializeCommonEvent(20005110, 4500680, 4502295);
    InitializeCommonEvent(20005120, 4500682, 1092616192);
    InitializeCommonEvent(20005120, 4500683, 1096810496);
    InitializeCommonEvent(20005120, 4500685, 1090519040);
    
    // Sister Friede
    InitializeEvent(0, 14500800, 0);
    InitializeEvent(0, 14505810, 0);
    InitializeEvent(0, 14505811, 0);
    InitializeEvent(0, 14505812, 0);
    InitializeEvent(0, 14505813, 0);
    InitializeEvent(0, 14505820, 0);
    InitializeEvent(0, 14505825, 0);
    InitializeEvent(0, 14505829, 0);
    InitializeCommonEvent(20005840, 4501800);
    InitializeCommonEvent(20005841, 4501800);
    InitializeCommonEvent(20005840, 4501801);
    InitializeCommonEvent(20005841, 4501801);
    InitializeEvent(0, 14505830, 0);
    InitializeEvent(0, 14505831, 0);
    InitializeEvent(0, 14505832, 0);
    InitializeEvent(0, 14505833, 0);
    InitializeEvent(0, 14505834, 0);
    
    // Lordran Remnants
    InitializeEvent(0, 14500860, 0); // Lordran Remnants - Kill
    InitializeEvent(0, 14505870, 0); // Lordran Remnants - Setup
    InitializeEvent(0, 14505889, 0); // Lordran Remnants - Setup Boss State
    
    InitializeCommonEvent(20005840, 4501860);
    InitializeCommonEvent(20005841, 4501860);
    InitializeEvent(0, 14505890, 0);
    InitializeCommonEvent(20005620, 14500510, 14501510, 4501510, 4501511, 4501512, 14501511);
    InitializeCommonEvent(20005628, 14500511, 4501512, 4502511);
    InitializeEvent(0, 14505510, 0);
    InitializeEvent(0, 14505500, 0);
    InitializeEvent(0, 14505501, 0);
    InitializeEvent(0, 14505520, 0);
    InitializeEvent(0, 14505525, 0);
    InitializeEvent(0, 14505580, 0);
    InitializeEvent(0, 14505530, 4501530, 4502530, 1061158912, 4501260);
    InitializeEvent(1, 14505530, 4501531, 4502531, 1048576000, 0);
    InitializeEvent(2, 14505530, 4501532, 4502532, 1048576000, 0);
    InitializeEvent(0, 14505533, 14505530, 4502535);
    InitializeEvent(1, 14505533, 14505531, 4502536);
    InitializeEvent(2, 14505533, 14505532, 4502537);
    InitializeEvent(0, 14505536, 14505530, 4502535, 4501530, 450000020);
    InitializeEvent(1, 14505536, 14505531, 4502536, 4501531, 450000021);
    InitializeEvent(2, 14505536, 14505532, 4502537, 4501532, 450000021);
    InitializeEvent(0, 14505540, 14500540, 4501540, 9370, 4503540, 4503541, 14504540, 14504541, 14504543, 14504544, 0);
    InitializeEvent(1, 14505540, 14500542, 4501542, 9370, 4503542, 4503543, 14504545, 14504546, 14504547, 14504548, 14504549);
    InitializeEvent(0, 14505544, 14500540, 4502540);
    InitializeEvent(1, 14505544, 14500542, 4502542);
    InitializeCommonEvent(20005610, 14500550, 4502550, 4502551);
    InitializeCommonEvent(20005611, 14500550, 4503550, 4501550, 450300);
    InitializeCommonEvent(20005610, 14500552, 4502552, 4502553);
    InitializeCommonEvent(20005611, 14500552, 4503552, 4501552, 450300);
    InitializeCommonEvent(20005610, 14500554, 4502554, 4502555);
    InitializeCommonEvent(20005611, 14500554, 4503554, 4501554, 450300);
    InitializeCommonEvent(20005610, 14500556, 4502556, 4502557);
    InitializeCommonEvent(20005611, 14500556, 4503556, 4501556, 450320);
    InitializeCommonEvent(20005614, 4501570, 64500570);
    InitializeEvent(0, 14505580, 0);
    InitializeEvent(0, 14505600, 0);
    InitializeEvent(0, 14505610, 0);
    InitializeEvent(0, 14505611, 0);
    InitializeEvent(0, 14505620, 0);
    InitializeEvent(0, 14505630, 0);
    InitializeCommonEvent(20005650, 14500640, 4501640);
    InitializeCommonEvent(20005650, 14500641, 4501641);
    InitializeCommonEvent(20005780, 4501690, 2);
    InitializeEvent(0, 14505670, 0);
    InitializeEvent(0, 14505180, 0);
    InitializeEvent(0, 14505181, 0);
    InitializeEvent(0, 14505182, 0);
    InitializeEvent(0, 14505183, 0);
    
    // Sir Vilhelm
    InitializeCommonEvent(20006002, 4500701, 1658, 1655, 1659);
    InitializeEvent(0, 14505701, 4500700);
    InitializeEvent(0, 14500702, 4500700, 4500701);
    InitializeEvent(0, 14505703, 0);
    
    // Painter
    InitializeCommonEvent(20006002, 4500705, 1678, 1675, 1679);
    InitializeCommonEvent(20006002, 4500706, 1678, 1675, 1679);
    InitializeEvent(0, 14505711, 0);
    InitializeEvent(0, 14505712, 4500705, 4500706, 4506705, 4506706);
    InitializeEvent(0, 14505713, 4500706);
    InitializeEvent(0, 14505714, 4500706);
    InitializeEvent(0, 14505720, 4500706);
    InitializeEvent(0, 14505721, 4506705, 1660);
    InitializeEvent(1, 14505721, 4506706, 1661);
    InitializeEvent(0, 14505741, 4500710, 4501710);
    InitializeEvent(0, 14505742, 0);
    InitializeEvent(0, 14500743, 4500710, 4501710);
    InitializeCommonEvent(20006030, 4501711, 4000, 2, 55500, 50006550, 50006550, 1718);
    InitializeCommonEvent(20006031, 74500331, 4502705);
    
    // Corvian Villager
    InitializeCommonEvent(20006002, 4500715, 1698, 1695, 1699);
    InitializeCommonEvent(20006002, 4500716, 1698, 1695, 1699);
    InitializeCommonEvent(20006040, 4500715, 4502720, 5450);
    InitializeEvent(0, 14505731, 4500715, 4501715);
    InitializeEvent(0, 14505732, 4500715, 4501715, 4500716);
    InitializeEvent(0, 14505733, 0);
    InitializeCommonEvent(20006030, 4501716, 4000, 2, 55400, 50006540, 50006540, 14500733);
    InitializeCommonEvent(20006002, 4500720, 1798, 1795, 1799);
    InitializeEvent(0, 14500050, 0); // Cinders Scripts
});

Event(50, Default, function() {
    SetMapSoundState(4504801, Disabled);
    SetMapSoundState(4504802, Disabled);
    SetMapSoundState(4504803, Disabled);
    SetMapSoundState(4504804, Disabled);
    SetMapSoundState(4504861, Disabled);
    SetMapSoundState(4504862, Disabled);
    InitializeEvent(0, 14505699, 0);
    InitializeEvent(0, 14505700, 4500700, 4500701);
    InitializeEvent(0, 14505710, 4500705, 4500706, 4506705, 4506706);
    InitializeEvent(0, 14505740, 4500710, 4500801, 4500800, 4501710);
    InitializeEvent(0, 14505750, 4500803, 4500802);
    InitializeEvent(0, 14505730, 4500715, 4501715, 4500716);
    InitializeEvent(0, 14505770, 4500720);
    InitializeEvent(0, 14505771, 0);
    InitializeEvent(0, 14505150, 0);
    InitializeEvent(0, 14505160, 0);
    InitializeEvent(0, 14505780, 0);
    InitializeEvent(0, 14500050, 0); // Cinders Scripts
});

// Cinders Setup
Event(14500050, Restart, function() {
    // Ezekiel the Duelist
    InitializeCommonEvent(20090010, 4500738, 4502738, 30310, 63010, 13600, 99005420, 99005421, 14500738); // Setup
    InitializeCommonEvent(20009201, 4500738, 80300); // Kill Taunt
    
    // Eija the Shadow
    InitializeCommonEvent(20090010, 4500742, 4502742, 30310, 63010, 13700, 99005430, 99005431, 14500742); // Setup
    InitializeCommonEvent(20009201, 4500742, 80301); // Kill Taunt
    
    // Frozen Knight Torbjorn
    InitializeCommonEvent(20090010, 4500734, 4502734, 30310, 63010, 14800, 99005510, 99005511, 14500734); // Setup
    InitializeCommonEvent(20009201, 4500734, 80300); // Kill Taunt
    
    // Disciple of Alsanna
    InitializeCommonEvent(20090010, 4500736, 4502736, 30310, 63010, 15700, 99005600, 99005601, 14500736); // Setup
    InitializeCommonEvent(20009201, 4500736, 80300); // Kill Taunt
    
    // Chests
    InitializeCommonEvent(20005520, 14501400, 4501400, 4504681);
    InitializeCommonEvent(20005520, 14501401, 4501401, 4504682);
    InitializeCommonEvent(20005520, 14501402, 4501402, 4504683);
    InitializeCommonEvent(20005520, 14501403, 4501403, 4504684);
    InitializeCommonEvent(20005520, 14501404, 4501404, 4504685);
    InitializeCommonEvent(20005520, 14501405, 4501405, 4504686);
    InitializeCommonEvent(20005520, 14501406, 4501406, 4504687);
    
    // Warps
    InitializeCommonEvent(20008200, 4501900, 30002, 37, 3704011, 91040, 3702961, 2021, 99030004); // To Irithyll
    
    // Sounds
    ChangeCharacterEnableState(4500865, Disabled); 
    ChangeCharacterEnableState(4500866, Disabled); 
    ChangeCharacterEnableState(4500867, Disabled); 
    
    // Curses
    InitializeCommonEvent(20081010, 4505760, 250001002, 25000153); // Curse of Pride
    InitializeCommonEvent(20081010, 4505760, 250001102, 25000152); // Curse of Wrath
    InitializeCommonEvent(20081010, 4505760, 250001402, 25000151); // Curse of Vitality
    InitializeCommonEvent(20081010, 4505760, 250001602, 25000155); // Curse of Fortitude
    InitializeCommonEvent(20081010, 4505760, 250001202, 25000157); // Curse of Frailty
    InitializeCommonEvent(20081000, 4505750, 25000100); // Curse of Attraction
    
    // Status Aux
    InitializeCommonEvent(20090200, 4505760, 112610); // Frostbite
    
    // NG+
    InitializeCommonEvent(20008001, 4505775, 1);
    InitializeCommonEvent(20008001, 4505776, 2);
    InitializeCommonEvent(20008001, 4505777, 3);
    
    // Covenants
    InitializeCommonEvent(20081020, 4505760, 160100400, 160100403); // Company of Champions
    
    // Companion - Setup
    InitializeCommonEvent(20080000, 4500750); // Companion 1
    InitializeCommonEvent(20080000, 4500751); // Companion 2
    InitializeCommonEvent(20080000, 4500752); // Companion 3
    InitializeCommonEvent(20080000, 4500753); // Companion 4
    InitializeCommonEvent(20080000, 4500754); // Companion 5
    InitializeCommonEvent(20080000, 4500755); // Companion 6
    InitializeCommonEvent(20080000, 4500756); // Companion 7
    InitializeCommonEvent(20080000, 4500757); // Companion 8
    
    // Only load when player is in map
    IfPlayerInoutMap(AND_01, true, 45, 0);
    WaitForConditionGroupState(PASS, AND_01);
    
    // Companion - Summoning
    InitializeCommonEvent(20080001, 4500750, 160760000, 160760212, 45, 0); // Companion 1
    InitializeCommonEvent(20080001, 4500751, 160760001, 160760212, 45, 0); // Companion 2
    InitializeCommonEvent(20080001, 4500752, 160760002, 160760212, 45, 0); // Companion 3
    InitializeCommonEvent(20080001, 4500753, 160760003, 160760212, 45, 0); // Companion 4
    InitializeCommonEvent(20080001, 4500754, 160760004, 160760212, 45, 0); // Companion 5
    InitializeCommonEvent(20080001, 4500755, 160760005, 160760212, 45, 0); // Companion 6
    InitializeCommonEvent(20080001, 4500756, 160760006, 160760212, 45, 0); // Companion 7
    InitializeCommonEvent(20080001, 4500757, 160760007, 160760212, 45, 0); // Companion 8
    
    // Painter Jail
    InitializeEvent(0, 14505140, 0);
});

Event(14505140, Default, function() {
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 25008903);
    WaitFixedTimeSeconds(3.0); // Delay warp so text can be read
    WarpPlayer(39, 0, 3904001); // Irithyll Dungeon
});

Event(14505150, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    DeleteMapSFX(4503150, true);
    DeleteMapSFX(4503151, true);
    DeleteMapSFX(4503152, true);
    DeleteMapSFX(4503153, true);
    DeleteMapSFX(4503154, true);
    DeleteMapSFX(4503155, true);
    DeleteMapSFX(4503156, true);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 6952);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 148);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14500800);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfConditionGroup(MAIN, PASS, AND_01);
    Label0();
    SpawnMapSFX(4503150);
    SpawnMapSFX(4503151);
    SpawnMapSFX(4503152);
    SpawnMapSFX(4503153);
    SpawnMapSFX(4503154);
    SpawnMapSFX(4503155);
    SpawnMapSFX(4503156);
});

Event(14505160, Restart, function() {
    DeactivateObject(4506101, Disabled);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 14500162);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 9322);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14500161);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_01);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 9322);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 14500161);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, AND_02);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_03, false);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 9322);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 6952);
    IfConditionGroup(MAIN, PASS, AND_03);
    SpawnOneshotSFX(TargetEntityType.Object, 4501101, 200, 1060);
    Label0();
    DeactivateObject(4506101, Enabled);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 14500162);
    SetEventFlag(14500162, ON);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_04, false);
    IfMultiplayerState(AND_04, MultiplayerState.LeavingSession);
    IfActionButtonInArea(AND_04, 9344, 4501101);
    IfConditionGroup(MAIN, PASS, AND_04);
    SendAllPhantomsHome(0);
    RotateCharacter(10000, 4501101, 91040, false);
    WaitFixedTimeSeconds(3);
    WarpPlayer(50, 0, 5002110);
    SetEventFlag(14500160, ON);
});

Event(14505180, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14505186);
    ChangeCharacterEnableState(4500176, Disabled);
    SetCharacterAnimationState(4500176, Disabled);
});

Event(14505181, Restart, function() {
    SetEventFlag(14505180, ON);
    SetNetworkSyncState(Disabled);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500176);
    WaitFixedTimeSeconds(0.5);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfCharacterHasSpeffect(AND_01, 10000, 490, true, ComparisonType.Equal, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 4502177, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitRandomTimeSeconds(1, 4);
    SetNetworkconnectedEventFlag(14505185, ON);
});

Event(14505182, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500176);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14505186);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14505185);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 14505186);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    DisplayMessage(10012700, 1);
    SkipUnconditionally(5);
    IfCharacterType(AND_01, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(2, PASS, AND_01);
    DisplayMessage(10012700, 1);
    SkipUnconditionally(1);
    DisplayMessage(10012700, 1);
    WaitFixedTimeFrames(1);
    SpawnOneshotSFX(TargetEntityType.Character, 4500176, 236, 30310);
    ChangeCharacterEnableState(4500176, Enabled);
    SetCharacterAnimationState(4500176, Enabled);
    SetCharacterDefaultBackreadState(4500176, Enabled);
    SetNetworkUpdateRate(4500176, true, CharacterUpdateFrequency.AlwaysUpdate);
    ForceAnimationPlayback(4500176, 63010, false, false, false, 0, 1);
    SetNetworkconnectedEventFlag(14505186, ON);
});

Event(14505183, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500176);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14505186);
    IfCharacterDeadalive(AND_01, 4500176, DeathState.Dead, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    DisplayBanner(TextBannerType.BlackPhantomDeath);
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    DisplayMessage(10012701, 1);
    SkipUnconditionally(1);
    DisplayMessage(10012701, 1);
    WaitFixedTimeSeconds(2);
    AwardItemLot(59200);
    SetCharacterDefaultBackreadState(4500176, Disabled);
    SetNetworkUpdateRate(4500176, false, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkconnectedEventFlag(14500176, ON);
});

Event(14505200, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500200);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500860); // Lordran Remnants
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfInoutsideArea(AND_02, InsideOutsideState.Outside, 10000, 4502200, 1);
    IfInoutsideArea(AND_02, InsideOutsideState.Outside, 10000, 4502207, 1);
    IfCharacterBackreadStatus(AND_02, 4500201, true, ComparisonType.Equal, 1);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 14505202);
    IfConditionGroup(OR_02, PASS, AND_02);
    IfCharacterHPRatio(OR_02, 4500201, ComparisonType.LessOrEqual, 0.6, ComparisonType.Equal, 1);
    IfInoutsideArea(AND_03, InsideOutsideState.Outside, 4500201, 4502205, 1);
    IfInoutsideArea(AND_03, InsideOutsideState.Outside, 4500201, 4502206, 1);
    IfConditionGroup(OR_02, PASS, AND_03);
    IfConditionGroup(AND_04, PASS, OR_02);
    IfEventFlag(AND_04, OFF, TargetEventFlagType.EventFlag, 14505207);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventFlag, 14505206);
    IfConditionGroup(OR_03, PASS, AND_04);
    IfCharacterAIState(OR_03, 4500860, AIStateType.Combat, ComparisonType.Equal, 1); // Lordran Remnants
    IfConditionGroup(MAIN, PASS, OR_03);
    IfCharacterHPRatio(AND_05, 4500201, ComparisonType.LessOrEqual, 0.6, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_05);
    RequestCharacterAICommand(4500201, 10, 0);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(14505209, ON);
    EndUnconditionally(EventEndType.End);
    Label0();
    ForceAnimationPlayback(4500201, 3025, false, false, true, 0, 1);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    WaitFixedTimeSeconds(3);
    SetNetworkconnectedEventFlag(14500200, ON);
    AwardItemLot(60300010);
    SetSpeffect(4505201, 13032);
    EndUnconditionally(EventEndType.End);
});

Event(14505201, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 14500860); // Goto if Lordran Remnants is killed
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 14500200);
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 14505200);
    ChangeCharacterEnableState(4500201, Disabled);
    SetCharacterAIState(4500201, Disabled);
    SetNetworkUpdateRate(4500201, false, CharacterUpdateFrequency.AlwaysUpdate);
    SetSpeffect(4505201, 13032);
    EndUnconditionally(EventEndType.End);
    Label0();
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL1, false);
    GotoIfEventFlag(Label.LABEL2, OFF, TargetEventFlagType.EventFlag, 14505206);
    GotoIfEventFlag(Label.LABEL3, ON, TargetEventFlagType.EventFlag, 14505202);
    SetCharacterAIState(4500201, Disabled);
    SetCharacterGravity(4500201, Disabled);
    SetCharacterMaphit(4500201, true);
    SetCharacterImmortality(4500201, Enabled);
    Label3();
    SetNetworkUpdateRate(4500201, true, CharacterUpdateFrequency.AlwaysUpdate);
    EndUnconditionally(EventEndType.End);
    Label1();
    Label2();
    SetCharacterAIState(4500201, Disabled);
    SetCharacterGravity(4500201, Disabled);
    SetCharacterMaphit(4500201, true);
    SetCharacterImmortality(4500201, Enabled);
    ChangeCharacterEnableState(4500201, Disabled);
    IfCharacterType(AND_01, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfCharacterAIState(OR_02, 4500240, AIStateType.Combat, ComparisonType.Equal, 1);
    IfCharacterAIState(OR_02, 4500241, AIStateType.Combat, ComparisonType.Equal, 1);
    IfConditionGroup(OR_03, PASS, OR_02);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 4502201, 1);
    IfInoutsideArea(AND_02, InsideOutsideState.Outside, 10000, 4502203, 1);
    IfInoutsideArea(AND_02, InsideOutsideState.Outside, 10000, 4502204, 1);
    IfConditionGroup(OR_03, PASS, AND_02);
    IfConditionGroup(AND_03, PASS, OR_01);
    IfConditionGroup(AND_03, PASS, OR_03);
    IfCharacterBackreadStatus(AND_03, 4500201, true, ComparisonType.Equal, 1);
    IfEventFlag(AND_03, OFF, TargetEventFlagType.EventFlag, 14500860); // If Lordran Remnants is alive
    IfConditionGroup(MAIN, PASS, AND_03);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500860); // End if Lordran Remnants is dead
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500200);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14505200);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14505210);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14505216);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14505896);
    SetEventFlag(14505206, ON);
    ChangeCharacterEnableState(4500201, Enabled);
    SetCharacterAIState(4500201, Enabled);
    SetNetworkUpdateRate(4500201, true, CharacterUpdateFrequency.AlwaysUpdate);
    ForceAnimationPlayback(4500201, 20002, false, true, false, 0, 1);
    SetEventFlag(14505207, ON);
    IfInoutsideArea(OR_04, InsideOutsideState.Inside, 10000, 4502201, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, OR_04);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(4500201, 20007, false, false, false, 0, 1);
});

Event(14505202, Restart, function() {
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfCharacterBackreadStatus(AND_02, 4500201, true, ComparisonType.Equal, 1);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 4502202, 1);
    IfConditionGroup(OR_02, PASS, AND_02);
    IfDamageType(OR_02, 4500201, 10000, DamageType.Unspecified);
    IfConditionGroup(AND_03, PASS, OR_02);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 14505207);
    IfConditionGroup(MAIN, PASS, AND_03);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500860); // End if Lordran Remnants is dead
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500200);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14505200);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14505210);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14505216);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14505896);
    SetSpeffect(4505201, 13024);
    SetEventFlag(14505207, OFF);
    SetCharacterGravity(4500201, Enabled);
    SetCharacterMaphit(4500201, false);
    ForceAnimationPlayback(4500201, 20005, false, true, false, 0, 1);
    RequestCharacterAIReplan(4500201);
});

Event(14505203, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500860); // End if Lordran Remnants is dead
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500200);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14505216);
    IfCharacterHasEventMessage(OR_01, 4500201, 100, true, ComparisonType.Equal, 1);
    IfCharacterDeadalive(OR_01, 4500201, DeathState.Dead, ComparisonType.Equal, 1);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 14505216);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 14505896);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14505207);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14505209);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetNetworkconnectedEventFlag(14505206, OFF);
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 14505207);
    SetSpeffect(4500201, 13109);
    WaitFixedTimeSeconds(3);
    Label0();
    SetNetworkUpdateRate(4500201, false, CharacterUpdateFrequency.AlwaysUpdate);
    ChangeCharacterEnableState(4500201, Disabled);
});

Event(14505204, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500860); // End if Lordran Remnants is dead
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500200);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14505202);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14505206);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 14505202);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 14505865);
    IfCharacterDeadalive(AND_01, 4505212, DeathState.Alive, ComparisonType.LessOrEqual, 2);
    IfConditionGroup(MAIN, PASS, AND_01);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14505202);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500860); // End if Lordran Remnants is dead
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500200);
    ForceAnimationPlayback(4500201, 20007, false, false, false, 0, 1);
    ClearSpeffect(4505240, 5022);
    ClearSpeffect(4505242, 5022);
    ClearSpeffect(4505240, 13024);
    ClearSpeffect(4505242, 13024);
    SetSpeffect(4505240, 13020);
    SetSpeffect(4505242, 13020);
    SetSpeffect(4505242, 13022);
    SetSpeffect(4505247, 13022);
    SetSpeffect(4505247, 13023);
    SetSpeffect(4505247, 13020);
    ClearSpeffect(4505247, 13024);
    ClearSpeffect(4505247, 5022);
    SetCharacterEventTarget(4500247, 10000);
    SetCharacterEventTarget(4500248, 10000);
    SetCharacterEventTarget(4500249, 10000);
});

Event(14505210, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500210);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500860); // End if Lordran Remnants is dead
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfInoutsideArea(AND_02, InsideOutsideState.Outside, 10000, 4502210, 1);
    IfInoutsideArea(AND_02, InsideOutsideState.Outside, 10000, 4502217, 1);
    IfCharacterBackreadStatus(AND_02, 4500202, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_02, PASS, AND_02);
    IfCharacterHPRatio(OR_02, 4500202, ComparisonType.LessOrEqual, 0.6, ComparisonType.Equal, 1);
    IfCharacterAIState(OR_02, 4500860, AIStateType.Combat, ComparisonType.Equal, 1); // If Lordran Remnants is combat
    IfInoutsideArea(OR_02, InsideOutsideState.Outside, 4500202, 4502215, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 4500202, 4502216, 1);
    IfConditionGroup(AND_03, PASS, OR_02);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 14505216);
    IfConditionGroup(MAIN, PASS, AND_03);
    IfCharacterHPRatio(AND_04, 4500202, ComparisonType.LessOrEqual, 0.6, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_04);
    RequestCharacterAICommand(4500202, 10, 0);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(14505219, ON);
    EndUnconditionally(EventEndType.End);
    Label0();
    ForceAnimationPlayback(4500202, 3025, false, false, false, 0, 1);
    WaitFixedTimeSeconds(4);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetNetworkconnectedEventFlag(14500210, ON);
    AwardItemLot(60300020);
    SetSpeffect(4505202, 13032);
});

Event(14505211, Restart, function() {
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 14500860); // Goto 1 if Lordran Remnants is dead
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 14500210);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 14505210);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 14500216);
    SetCharacterAIState(4500202, Disabled);
    SetCharacterGravity(4500202, Disabled);
    SetCharacterMaphit(4500202, true);
    SetCharacterImmortality(4500202, Enabled);
    ForceAnimationPlayback(4500202, 30003, true, false, false, 0, 1);
    SetCharacterAnimationState(4500202, Disabled);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 4502211, 1);
    IfCharacterBackreadStatus(AND_02, 4500202, true, ComparisonType.Equal, 1);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 14500860); // If Lordran Remnants is alive
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 14500860); // If Lordran Remnants is alive
    IfConditionGroup(MAIN, PASS, AND_02);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 14505896);
    SetEventFlag(14505216, ON);
    SetNetworkUpdateRate(4500202, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterAIState(4500202, Enabled);
    SetCharacterGravity(4500202, Enabled);
    SetCharacterMaphit(4500202, false);
    SetCharacterAnimationState(4500202, Enabled);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(4500202, 20009, false, true, false, 0, 1);
    RequestCharacterAIReplan(4500202);
    SetEventFlag(14505217, ON);
    EndUnconditionally(EventEndType.End);
    Label0();
    SetNetworkUpdateRate(4500202, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterAIState(4500202, Enabled);
    SetCharacterGravity(4500202, Enabled);
    SetCharacterMaphit(4500202, false);
    SetCharacterAnimationState(4500202, Enabled);
    EndUnconditionally(EventEndType.End);
    Label1();
    ChangeCharacterEnableState(4500202, Disabled);
    SetCharacterAnimationState(4500202, Disabled);
    SetCharacterAIState(4500202, Disabled);
    SetSpeffect(4505202, 13032);
    SetSpeffect(4505202, 13032);
});

Event(14505213, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500860); // End if Lordran Remnants is dead
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500210);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfCharacterHasEventMessage(OR_01, 4500202, 100, true, ComparisonType.Equal, 1);
    IfCharacterDeadalive(OR_01, 4500202, DeathState.Dead, ComparisonType.Equal, 1);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 14505896);
    IfConditionGroup(MAIN, PASS, OR_01);
    IfCharacterAIState(AND_05, 4500860, AIStateType.Combat, ComparisonType.Equal, 1); // If Lordran Remnants is in combat
    SkipIfConditionGroupStateUncompiled(1, FAIL, AND_01);
    SetEventFlag(14505216, OFF);
    SetNetworkUpdateRate(4500202, false, CharacterUpdateFrequency.AlwaysUpdate);
    ChangeCharacterEnableState(4500202, Disabled);
    ClearSpeffect(4505219, 5022);
    SetEventFlag(14505216, OFF);
    EndUnconditionally(EventEndType.End);
});

Event(14505240, Restart, function(X0_4, X4_4) {
    SetSpeffect(X0_4, X4_4);
});

Event(14505245, Restart, function(X0_4, X4_4) {
    IfCharacterAIState(MAIN, X0_4, AIStateType.Combat, ComparisonType.Equal, 1);
    SetCharacterEventTarget(X0_4, X4_4);
    RequestCharacterAICommand(X0_4, 100, 0);
    RequestCharacterAIReplan(X0_4);
    IfElapsedSeconds(OR_01, 60);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 14505206);
    IfConditionGroup(MAIN, PASS, OR_01);
    RequestCharacterAICommand(X0_4, -1, 0);
    SetSpeffect(X0_4, 5022);
});

Event(14505250, Restart, function(X0_4, X4_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfCharacterHasSpeffect(OR_01, X0_4, 13022, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(OR_02, X0_4, 13023, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_03, PASS, OR_01);
    IfConditionGroup(OR_03, PASS, OR_02);
    IfConditionGroup(AND_01, PASS, OR_03);
    IfCharacterBackreadStatus(AND_01, X0_4, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    GotoIfConditionGroupStateCompiled(Label.LABEL0, PASS, OR_01);
    GotoIfConditionGroupStateCompiled(Label.LABEL1, PASS, OR_02);
    Label0();
    SetCharacterEventTarget(X0_4, 10000);
    EndUnconditionally(EventEndType.End);
    Label1();
    IfCharacterDeadalive(AND_03, X4_4, DeathState.Dead, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_03);
    SetCharacterEventTarget(X0_4, X4_4);
    EndUnconditionally(EventEndType.End);
});

Event(14505260, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    ForceAnimationPlayback(X0_4, X4_4, true, false, false, 0, 1);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14505217);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 14505213);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 4502211, 1);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 14505210);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(AND_03, PASS, OR_01);
    IfCharacterBackreadStatus(AND_03, X0_4, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_03, X0_4, 5450, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_02, PASS, AND_03);
    IfCharacterHasSpeffect(OR_02, X0_4, 5450, false, ComparisonType.Equal, 1);
    IfConditionGroup(AND_04, PASS, OR_02);
    IfCharacterAIState(OR_03, X0_4, AIStateType.Recognition, ComparisonType.Equal, 1);
    IfCharacterAIState(OR_03, X0_4, AIStateType.Alert, ComparisonType.Equal, 1);
    IfCharacterAIState(OR_03, X0_4, AIStateType.Combat, ComparisonType.Equal, 1);
    IfConditionGroup(AND_04, PASS, OR_03);
    IfConditionGroup(MAIN, PASS, AND_04);
    SetAutogeneratedEventspecificEventFlag2Unknown200375(2, 1);
    SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    IfCharacterHasSpeffect(AND_02, X0_4, 5450, false, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL1, PASS, AND_02);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 14505213);
    WaitFixedTimeSeconds(X12_4);
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphit(X0_4, false);
    ForceAnimationPlayback(X0_4, X8_4, false, true, false, 0, 1);
    RequestCharacterAIReplan(X0_4);
    SetSpeffect(X0_4, 5022);
    SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.AlwaysUpdate);
    EndUnconditionally(EventEndType.End);
    Label0();
    WaitFixedTimeSeconds(X16_4);
    ForceAnimationPlayback(X0_4, X20_4, false, true, false, 0, 1);
    Label1();
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphit(X0_4, false);
    ForceAnimationPlayback(X0_4, X8_4, false, true, false, 0, 1);
    RequestCharacterAIReplan(X0_4);
    SetSpeffect(X0_4, 5022);
    SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.AlwaysUpdate);
});

Event(14505270, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    ForceAnimationPlayback(X0_4, X4_4, true, false, false, 0, 1);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfConditionGroup(AND_03, PASS, OR_01);
    IfInoutsideArea(AND_05, InsideOutsideState.Inside, 10000, X28_4, 1);
    IfInoutsideArea(OR_04, InsideOutsideState.Inside, 10000, X16_4, 1);
    IfConditionGroup(OR_04, PASS, AND_05);
    IfConditionGroup(AND_03, PASS, OR_04);
    IfConditionGroup(OR_03, PASS, AND_03);
    IfCharacterHasSpeffect(AND_04, X0_4, 13020, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_03, PASS, AND_04);
    IfConditionGroup(AND_01, PASS, OR_03);
    IfCharacterBackreadStatus(AND_01, X0_4, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, X0_4, 5450, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_02, PASS, AND_01);
    IfDamageType(OR_02, X0_4, 10000, DamageType.Unspecified);
    IfConditionGroup(MAIN, PASS, OR_02);
    SetAutogeneratedEventspecificEventFlag2Unknown200375(2, 1);
    IfCharacterHasSpeffect(AND_02, X0_4, 5450, false, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_02);
    GotoIfConditionGroupStateCompiled(Label.LABEL1, PASS, AND_04);
    GotoIfConditionGroupStateCompiled(Label.LABEL1, PASS, AND_05);
    WaitFixedTimeSeconds(X12_4);
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphit(X0_4, false);
    RequestCharacterAIReplan(X0_4);
    ForceAnimationPlayback(X0_4, X8_4, false, true, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    Label1();
    WaitFixedTimeSeconds(X24_4);
    SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphit(X0_4, false);
    RequestCharacterAIReplan(X0_4);
    ForceAnimationPlayback(X0_4, X20_4, false, true, false, 0, 1);
    SetSpeffect(X0_4, 5000);
    SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.AlwaysUpdate);
    EndUnconditionally(EventEndType.End);
    Label0();
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphit(X0_4, false);
});

Event(14505280, Restart, function() {
    SetSpeffect(4500212, 13027);
    IfCharacterHasSpeffect(MAIN, 4500212, 13029, true, ComparisonType.Equal, 1);
    SetSpeffect(4500212, 13022);
    SetSpeffect(4500213, 13022);
    WaitFixedTimeSeconds(1.8);
    SetSpeffect(4505242, 13022);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 14505281);
    SetSpeffect(4505242, 13031);
    EndUnconditionally(EventEndType.End);
    ClearSpeffect(4505242, 13031);
    SetCharacterEventTarget(4505242, 10000);
});

Event(14505281, Restart, function() {
    SetSpeffect(4500210, 13027);
    IfCharacterHasSpeffect(MAIN, 4500210, 13029, true, ComparisonType.Equal, 1);
    SetSpeffect(4500212, 13034);
    SetSpeffect(4500240, 13034);
    SetSpeffect(4500241, 13034);
    SetSpeffect(4500212, 13022);
    SetSpeffect(4500240, 13022);
    SetSpeffect(4500241, 13022);
    ClearSpeffect(4500212, 13026);
    SetSpeffect(4500240, 5020);
    SetSpeffect(4500241, 5020);
    ClearSpeffect(4500212, 13024);
    ClearSpeffect(4500240, 13024);
    ClearSpeffect(4500241, 13024);
    WaitFixedTimeSeconds(3.8);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 14505280);
    SetSpeffect(4505242, 13022);
    SetSpeffect(4505242, 13031);
    EndUnconditionally(EventEndType.End);
    Label0();
    ClearSpeffect(4505242, 13031);
    SetCharacterEventTarget(4505242, 10000);
});

Event(14505282, Restart, function(X0_4, X4_4) {
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, X0_4, X4_4, 1);
    IfCharacterHasSpeffect(AND_01, X0_4, 13031, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(6);
    ClearSpeffect(X0_4, 13022);
    ClearSpeffect(X0_4, 13031);
    ClearCharactersAITarget(X0_4);
});

Event(14505290, Restart, function(X0_4, X4_4, X8_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfCharacterHasSpeffect(AND_01, X0_4, X8_4, true, ComparisonType.Equal, 1);
    IfCharacterBackreadStatus(AND_01, X0_4, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetSpeffect(X0_4, 13031);
    SetEventPoint(X0_4, X4_4, 3);
});

Event(14505300, Restart, function(X0_4, X4_4, X8_4) {
    EndIfCharacterHasSpeffect(EventEndType.End, X0_4, 5404, true, ComparisonType.Equal, 1);
    IfCharacterType(AND_01, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfEntityInoutsideRadiusOfEntity(AND_02, InsideOutsideState.Inside, 10000, X4_4, X8_4, 1);
    IfCharacterBackreadStatus(AND_02, X0_4, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_02);
    RequestCharacterAICommand(X0_4, 100, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(X0_4, -1, 0);
    EndUnconditionally(EventEndType.End);
});

Event(14505310, Restart, function(X0_4) {
    SetCharacterInvincibility(X0_4, Enabled);
    SetCharacterHPBarDisplay(X0_4, Disabled);
    SetLockOnPoint(X0_4, 220, Disabled);
    SetCharacterAIState(X0_4, Disabled);
});

Event(14505350, Restart, function(X0_4) {
    SetCharacterAnimationState(X0_4, Disabled);
    SetCharacterAIState(X0_4, Disabled);
    SetCharacterHPBarDisplay(X0_4, Disabled);
    SetLockOnPoint(X0_4, 220, Disabled);
    SetCharacterGravity(X0_4, Disabled);
    SetSpeffect(X0_4, 13028);
});

Event(14505360, Restart, function() {
    SetSpeffect(4500570, 5022);
});

Event(14505370, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    ForceAnimationPlayback(X0_4, X4_4, true, false, false, 0, 1);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfConditionGroup(AND_03, PASS, OR_01);
    IfEntityInoutsideRadiusOfEntity(AND_03, InsideOutsideState.Inside, 10000, X0_4, X12_4, 1);
    IfCharacterAIState(OR_04, X0_4, AIStateType.Recognition, ComparisonType.Equal, 1);
    IfCharacterAIState(OR_04, X0_4, AIStateType.Alert, ComparisonType.Equal, 1);
    IfCharacterAIState(OR_04, X0_4, AIStateType.Combat, ComparisonType.Equal, 1);
    IfConditionGroup(AND_03, PASS, OR_04);
    IfConditionGroup(OR_03, PASS, AND_03);
    IfCharacterAIState(OR_02, X0_4, AIStateType.Recognition, ComparisonType.Equal, 1);
    IfCharacterAIState(OR_02, X0_4, AIStateType.Combat, ComparisonType.Equal, 1);
    IfConditionGroup(OR_03, PASS, OR_02);
    IfCharacterBackreadStatus(AND_01, X0_4, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, X0_4, 5450, true, ComparisonType.Equal, 1);
    IfConditionGroup(AND_01, PASS, OR_03);
    IfConditionGroup(OR_02, PASS, AND_01);
    IfCharacterDamagedBy(OR_02, X0_4, 10000);
    IfConditionGroup(MAIN, PASS, OR_02);
    SetAutogeneratedEventspecificEventFlag2Unknown200375(2, 1);
    WaitFixedTimeSeconds(0.1);
    IfCharacterHasSpeffect(AND_02, X0_4, 5450, false, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_02);
    IfEntityInoutsideRadiusOfEntity(AND_04, InsideOutsideState.Inside, 10000, X0_4, X12_4, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL1, PASS, AND_04);
    SkipIfConditionGroupStateCompiled(1, FAIL, AND_01);
    WaitFixedTimeSeconds(X16_4);
    Label1();
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphit(X0_4, false);
    RequestCharacterAIReplan(X0_4);
    ForceAnimationPlayback(X0_4, X8_4, false, true, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    Label0();
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphit(X0_4, false);
});

Event(14505380, Restart, function() {
    SetNetworkSyncState(Disabled);
    ClearSpeffect(10000, 4680);
    IfCharacterDeadalive(AND_09, 4500500, DeathState.Dead, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, AND_09);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4502476, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 4502475, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfCharacterType(AND_03, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_03, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_03, PASS, AND_03);
    IfCharacterType(OR_03, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_03, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_03, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfConditionGroup(AND_01, PASS, OR_03);
    IfConditionGroup(MAIN, PASS, AND_01);
    IfEntityInoutsideRadiusOfEntity(AND_09, InsideOutsideState.Outside, 10000, 4500500, 14, 0);
    IfEventFlag(AND_09, OFF, TargetEventFlagType.EventIDSlotNumber, 0);
    SkipIfConditionGroupStateUncompiled(1, PASS, AND_09);
    WaitFixedTimeSeconds(5);
    SetSpeffect(10000, 4680);
    WaitFixedTimeSeconds(0.5);
    IfInoutsideArea(AND_02, InsideOutsideState.Outside, 10000, 4502476, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 4502475, 1);
    IfConditionGroup(OR_02, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_02);
    WaitFixedTimeSeconds(0.5);
    EndUnconditionally(EventEndType.Restart);
});

Event(14505381, Restart, function() {
    SetNetworkSyncState(Disabled);
    IfCharacterHasSpeffect(MAIN, 10000, 13067, true, ComparisonType.Equal, 1);
    SetCameraVibration(50, TargetEntityType.Area, 4502476, -1, 999, 999);
    WaitFixedTimeSeconds(4);
    EndUnconditionally(EventEndType.Restart);
});

Event(14505382, Restart, function() {
    IfCharacterType(AND_03, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_03, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_03, PASS, AND_03);
    IfCharacterType(OR_03, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_03, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_03, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfConditionGroup(AND_01, PASS, OR_03);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 4502476, 1);
    IfElapsedSeconds(AND_01, 8);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetCharacterEventTarget(4500500, 10000);
    EndUnconditionally(EventEndType.Restart);
});

Event(14505383, Restart, function() {
    ChangeCharacterEnableState(4500360, Disabled);
    SetCharacterBackreadState(4500360, true);
});

Event(14505400, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    ForceAnimationPlayback(X0_4, X4_4, true, false, false, 0, 1);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, X12_4, 1);
    IfCharacterBackreadStatus(AND_01, X0_4, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, X0_4, 5450, true, ComparisonType.Equal, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(OR_02, PASS, AND_01);
    IfCharacterDamagedBy(OR_02, X0_4, 10000);
    IfCharacterHPRatio(OR_02, X0_4, ComparisonType.LessOrEqual, 0.99, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_02);
    IfCharacterHasSpeffect(AND_02, X0_4, 5450, false, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_02);
    SetAutogeneratedEventspecificEventFlag2Unknown200375(2, 1);
    SkipIfConditionGroupStateCompiled(1, FAIL, AND_01);
    WaitFixedTimeSeconds(X16_4);
    SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphit(X0_4, false);
    RequestCharacterAIReplan(X0_4);
    ForceAnimationPlayback(X0_4, X8_4, false, true, false, 0, 1);
    SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.AlwaysUpdate);
    EndUnconditionally(EventEndType.End);
    Label0();
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphit(X0_4, false);
});

Event(14505410, Restart, function() {
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4502423, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4502424, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfCharacterDeadalive(AND_01, 4500403, DeathState.Alive, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetCharacterHome(4500403, 4502361);
    WaitFixedTimeSeconds(0);
    SetSpeffect(4500403, 13250);
    RequestCharacterAICommand(4500403, 200, 0);
    SetCharacterEventTarget(4500403, 4500483);
    RequestCharacterAIReplan(4500403);
    IfCharacterDeadalive(MAIN, 4500483, DeathState.Dead, ComparisonType.Equal, 1);
    SetCharacterEventTarget(4500403, 4500484);
    EndUnconditionally(EventEndType.End);
});

Event(14505411, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfCharacterDeadalive(OR_01, 4505483, DeathState.Dead, ComparisonType.Equal, 2);
    IfCharacterAIState(OR_01, 4500403, AIStateType.Combat, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    Label0();
    ClearSpeffect(4500403, 13253);
});

Event(14505412, Restart, function() {
    SetNetworkSyncState(Disabled);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4502423, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4502424, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfCharacterDeadalive(AND_01, 4500403, DeathState.Alive, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetNetworkUpdateRate(4500403, true, CharacterUpdateFrequency.AlwaysUpdate);
    IfInoutsideArea(AND_02, InsideOutsideState.Outside, 10000, 4502423, 1);
    IfInoutsideArea(AND_02, InsideOutsideState.Outside, 10000, 4502424, 1);
    IfConditionGroup(OR_02, PASS, AND_02);
    IfCharacterDeadalive(OR_02, 4500403, DeathState.Dead, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_02);
    SetNetworkUpdateRate(4500403, false, CharacterUpdateFrequency.AlwaysUpdate);
    EndUnconditionally(EventEndType.Restart);
});

Event(14505420, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    ForceAnimationPlayback(X0_4, X4_4, true, false, false, 0, 1);
    IfCharacterAIState(AND_03, X20_4, AIStateType.Combat, ComparisonType.Equal, 1);
    IfEntityInoutsideRadiusOfEntity(AND_03, InsideOutsideState.Inside, X0_4, X20_4, 1, 0);
    IfConditionGroup(OR_02, PASS, AND_03);
    IfCharacterDeadalive(OR_02, X12_4, DeathState.Dead, ComparisonType.GreaterOrEqual, 1);
    IfConditionGroup(AND_01, PASS, OR_02);
    IfCharacterBackreadStatus(AND_01, X0_4, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, X0_4, 5450, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfDamageType(OR_01, X0_4, 10000, DamageType.Unspecified);
    IfConditionGroup(MAIN, PASS, OR_01);
    IfCharacterHasSpeffect(AND_02, X0_4, 5450, false, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_02);
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphit(X0_4, false);
    ForceAnimationPlayback(X0_4, X8_4, false, false, false, 0, 1);
    RequestCharacterAIReplan(X0_4);
    SetSpeffect(X0_4, 5021);
    SetEventPoint(X0_4, X16_4, 0.5);
    EndUnconditionally(EventEndType.End);
    Label0();
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphit(X0_4, false);
});

Event(14505430, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    IfCharacterDeadalive(OR_01, X8_4, DeathState.Dead, ComparisonType.GreaterOrEqual, 1);
    IfCharacterAIState(OR_01, X12_4, AIStateType.Combat, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetSpeffect(X0_4, 5021);
    SetEventPoint(X0_4, X4_4, 0.5);
});

Event(14505450, Restart, function(X0_4, X4_4, X8_4) {
    IfCharacterAIState(OR_01, X8_4, AIStateType.Recognition, ComparisonType.Equal, 1);
    IfCharacterAIState(OR_01, X8_4, AIStateType.Combat, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    SetSpeffect(X0_4, 5021);
    SetEventPoint(X0_4, X4_4, 0.5);
    RequestCharacterAIReplan(X0_4);
});

Event(14505470, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    ForceAnimationPlayback(X0_4, X4_4, true, false, false, 0, 1);
    IfCharacterType(AND_09, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_09, 10000, 3710, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.WhitePhantom, ComparisonType.Equal, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, X12_4, 1);
    IfCharacterBackreadStatus(AND_01, X0_4, true, ComparisonType.Equal, 1);
    IfCharacterHasSpeffect(AND_01, X0_4, 5450, true, ComparisonType.Equal, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(OR_02, PASS, AND_01);
    IfCharacterDamagedBy(OR_02, X0_4, 10000);
    IfConditionGroup(MAIN, PASS, OR_02);
    IfCharacterHasSpeffect(AND_02, X0_4, 5450, false, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_02);
    SetAutogeneratedEventspecificEventFlag2Unknown200375(2, 1);
    WaitFixedTimeSeconds(X16_4);
    SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphit(X0_4, false);
    RequestCharacterAIReplan(X0_4);
    ForceAnimationPlayback(X0_4, X8_4, false, true, false, 0, 1);
    SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.AlwaysUpdate);
    EndUnconditionally(EventEndType.End);
    Label0();
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphit(X0_4, false);
});

Event(14505490, Restart, function(X0_4, X4_4, X8_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14505494);
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    ForceAnimationPlayback(X0_4, X4_4, true, false, false, 0, 1);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 14505493);
    IfCharacterType(OR_01, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_01, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfConditionGroup(AND_02, PASS, OR_01);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 4502490, 1);
    IfInoutsideArea(OR_02, InsideOutsideState.Inside, 10000, 4502491, 1);
    IfConditionGroup(AND_02, PASS, OR_02);
    IfCharacterBackreadStatus(AND_02, X0_4, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_02);
    IfCharacterType(OR_03, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_03, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfConditionGroup(AND_04, PASS, OR_03);
    IfEventFlag(AND_04, OFF, TargetEventFlagType.EventFlag, 14505493);
    IfEventFlag(AND_04, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfInoutsideArea(AND_04, InsideOutsideState.Inside, 10000, 4502491, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL1, PASS, AND_04);
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(14505493, ON);
    SkipUnconditionally(1);
    SetEventFlag(14505493, ON);
    EndUnconditionally(EventEndType.Restart);
    Label0();
    IfCharacterType(OR_03, 10000, TargetType.Alive, ComparisonType.Equal, 1);
    IfCharacterType(OR_03, 10000, TargetType.Hollow, ComparisonType.Equal, 1);
    IfConditionGroup(AND_05, PASS, OR_03);
    IfInoutsideArea(AND_05, InsideOutsideState.Outside, 10000, 4502490, 1);
    IfInoutsideArea(AND_05, InsideOutsideState.Outside, 10000, 4502491, 1);
    IfCharacterBackreadStatus(AND_05, X0_4, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_05);
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(14505493, OFF);
    SkipUnconditionally(1);
    SetEventFlag(14505493, OFF);
    EndUnconditionally(EventEndType.Restart);
    Label1();
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(14505494, ON);
    SetCharacterMaphit(X0_4, false);
    ForceAnimationPlayback(X0_4, X8_4, false, false, false, 0, 1);
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterGravity(X0_4, Enabled);
    RequestCharacterAIReplan(X0_4);
});

Event(14505495, Restart, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500495);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfCharacterDeadalive(AND_01, 4500670, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(AND_01, 4500671, DeathState.Dead, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(14500495, ON);
    AwardItemLot(61300010);
});

Event(14505499, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    ClearCharactersAITarget(4505499);
    RequestCharacterAIReplan(4505499);
});

Event(14505500, Restart, function() {
    ActivateHitAndCreateNavimesh(4503505, Disabled);
    ActivateHitAndCreateNavimesh(4503506, Disabled);
    IfObjectDestroyed(OR_01, DestructionState.Destroyed, 4501503, ComparisonType.Equal, 1);
    IfObjectDestroyed(OR_01, DestructionState.Destroyed, 4501504, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, OR_01);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_02, true);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_02);
    DeactivateObject(4501501, Disabled);
    DeactivateObject(4501502, Disabled);
    ActivateHitAndCreateNavimesh(4503506, Enabled);
    IfObjectDestroyed(OR_02, DestructionState.Destroyed, 4501503, ComparisonType.Equal, 1);
    IfObjectDestroyed(OR_02, DestructionState.Destroyed, 4501504, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_02);
    SetNetworkconnectedEventFlag(14505500, ON);
    ActivateHitAndCreateNavimesh(4503506, Disabled);
    ActivateHitAndCreateNavimesh(4503505, Enabled);
    DeactivateObject(4501501, Enabled);
    SetObjectInvulnerability(4501501, Enabled);
    WaitFixedTimeFrames(1);
    DeactivateObject(4501503, Disabled);
    DeactivateObject(4501504, Disabled);
    ForceAnimationPlayback(4506500, 1, false, false, false, 0, 1);
    WaitFixedTimeSeconds(10);
    DeactivateObject(4501501, Disabled);
    WaitFixedTimeSeconds(6);
    DeactivateObject(4501502, Enabled);
    WaitFixedTimeFrames(1);
    RegisterLadder(14500502, 14500503, 4501502);
    EndUnconditionally(EventEndType.End);
    Label0();
    ReproduceObjectAnimation(4501500, 2);
    DeactivateObject(4501501, Disabled);
    DeactivateObject(4501502, Enabled);
    DeactivateObject(4501503, Disabled);
    DeactivateObject(4501504, Disabled);
    RegisterLadder(14500502, 14500503, 4501502);
    ActivateHitAndCreateNavimesh(4503505, Enabled);
    IfObjectBackread(MAIN, 4501500, true, ComparisonType.Equal, 1);
    ReproduceObjectAnimation(4501500, 2);
});

Event(14505501, Default, function() {
    IfObjectDestroyed(OR_01, DestructionState.Destroyed, 4501503, ComparisonType.Equal, 1);
    IfObjectDestroyed(OR_01, DestructionState.Destroyed, 4501504, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, OR_01);
    IfObjectBackreadUnknown511(MAIN, 4506500, true, ComparisonType.Equal, 1);
    IfObjectDestroyed(OR_02, DestructionState.Destroyed, 4501503, ComparisonType.Equal, 1);
    IfObjectDestroyed(OR_02, DestructionState.Destroyed, 4501504, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, OR_02);
    ForceAnimationPlayback(4506500, 0, true, false, false, 0, 1);
});

Event(14505510, Default, function() {
    InitializeCommonEvent(20005621, 14500510, 14501510, 4501510, 4501511, 4504511, 4501512, 4504512, 4502511, 4502512, 14501511, 14504510, 0);
});

Event(14505520, Restart, function() {
    SetNetworkSyncState(Disabled);
    DeleteMapSFX(4503520, true);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4502650, 1);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 14505521);
    IfConditionGroup(MAIN, PASS, AND_01);
    SpawnMapSFX(4503520);
    IfInoutsideArea(AND_02, InsideOutsideState.Outside, 10000, 4502650, 1);
    IfConditionGroup(OR_02, PASS, AND_02);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 14505521);
    IfConditionGroup(MAIN, PASS, OR_02);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 14505521);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_03);
    EndUnconditionally(EventEndType.Restart);
    Label0();
    DeleteMapSFX(4503520, false);
    EndUnconditionally(EventEndType.Restart);
});

Event(14505525, Restart, function() {
    SetNetworkSyncState(Disabled);
    DeleteMapSFX(4503521, true);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 14505521);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 4502650, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 4502651, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 4502652, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 4502653, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 4502654, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 4502655, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 4502656, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 4502657, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 4502658, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 4502659, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 4502660, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 4502661, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 4502662, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 4502663, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 4502664, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 4502665, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 4502666, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 4502667, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 4502668, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Outside, 10000, 4502669, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SpawnMapSFX(4503521);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4502650, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4502651, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4502652, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4502653, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4502654, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4502655, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4502656, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4502657, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4502658, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4502659, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4502660, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4502661, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4502662, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4502663, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4502664, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4502665, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4502666, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4502667, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4502668, 1);
    IfInoutsideArea(OR_01, InsideOutsideState.Inside, 10000, 4502669, 1);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 14505521);
    IfConditionGroup(MAIN, PASS, OR_01);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 14505521);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_02);
    EndUnconditionally(EventEndType.Restart);
    Label0();
    DeleteMapSFX(4503521, false);
    EndUnconditionally(EventEndType.Restart);
});

Event(14505530, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, X4_4, 1);
    SetAutogeneratedEventspecificEventFlag1Unknown200373(2, 1);
    WaitFixedTimeSeconds(X8_4);
    DestroyObject(X0_4);
    EndIfComparison(EventEndType.End, ComparisonType.Equal, X12_4, 0);
    ForceAnimationPlayback(X12_4, 301, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    Label0();
    DeactivateObject(X0_4, Disabled);
    EndIfComparison(EventEndType.End, ComparisonType.Equal, X12_4, 0);
    ForceAnimationPlayback(X12_4, 302, false, false, false, 0, 1);
});

Event(14505533, Restart, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    ClearSpeffect(10000, 4070);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, X0_4);
    GotoIfPlayerInoutsideArea(Label.LABEL0, InsideOutsideState.Inside, 10000, X4_4);
    EndUnconditionally(EventEndType.End);
    Label0();
    SetSpeffect(10000, 4070);
    WaitFixedTimeSeconds(8);
    ClearSpeffect(10000, 4070);
    EndUnconditionally(EventEndType.End);
});

Event(14505536, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    SetNetworkSyncState(Disabled);
    IfObjectDestroyed(AND_01, DestructionState.Destroyed, X8_4, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, AND_01);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, X0_4);
    PlaySE(X8_4, SoundType.a_EnvironmentalSound, X12_4);
    EndIfPlayerInoutsideArea(EventEndType.End, InsideOutsideState.Outside, 10000, X4_4);
    SetCameraVibration(104, TargetEntityType.Area, X4_4, -1, 999, 999);
    WaitFixedTimeSeconds(5);
    EndUnconditionally(EventEndType.End);
});

Event(14505540, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
    ActivateHitAndCreateNavimesh(X12_4, Disabled);
    ActivateHitAndCreateNavimesh(X16_4, Disabled);
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, X0_4);
    ReproduceObjectAnimation(X4_4, 2);
    ActivateHitAndCreateNavimesh(X16_4, Enabled);
    EndUnconditionally(EventEndType.End);
    Label0();
    ActivateHitAndCreateNavimesh(X12_4, Enabled);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, X0_4);
    IfActionButtonInArea(AND_01, X8_4, X4_4);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(X0_4, ON);
    ActivateHitAndCreateNavimesh(X12_4, Disabled);
    IssueShortWarpRequest(10000, TargetEntityType.Object, X4_4, 100);
    ForceAnimationPlayback(10000, 60440, false, false, false, 0, 1);
    ForceAnimationPlayback(X4_4, 1, false, false, false, 0, 1);
    WaitFixedTimeSeconds(1.5);
    CreateDamagingObject(X20_4, X4_4, 40, 6210, DamageTargetType.Character, 1, 1.3, 0);
    CreateDamagingObject(X24_4, X4_4, 41, 6210, DamageTargetType.Character, 1, 1.3, 0);
    CreateDamagingObject(X28_4, X4_4, 42, 6210, DamageTargetType.Character, 1, 1.3, 0);
    CreateDamagingObject(X32_4, X4_4, 43, 6210, DamageTargetType.Character, 1, 1.3, 0);
    CreateDamagingObject(X36_4, X4_4, 44, 6210, DamageTargetType.Character, 1, 1.3, 0);
    WaitFixedTimeSeconds(1.3);
    DeleteObjectEvent(X20_4);
    DeleteObjectEvent(X24_4);
    DeleteObjectEvent(X28_4);
    DeleteObjectEvent(X32_4);
    DeleteObjectEvent(X36_4);
    WaitFixedTimeSeconds(2.2);
    ReproduceObjectAnimation(X4_4, 2);
    ActivateHitAndCreateNavimesh(X16_4, Enabled);
});

Event(14505544, Restart, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, X0_4);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, X0_4);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, X4_4, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, FAIL, AND_01);
    WaitFixedTimeSeconds(2.64);
    SetCameraVibration(104, TargetEntityType.Area, 4502476, -1, 999, 999);
});

Event(14505580, Restart, function() {
    RegisterLadder(14500580, 14500581, 4501580);
    RegisterLadder(14500582, 14500583, 4501582);
    RegisterLadder(14500584, 14500585, 4501584);
    RegisterLadder(14500586, 14500587, 4501586);
    RegisterLadder(14500588, 14500589, 4501588);
    RegisterLadder(14500590, 14500591, 4501590);
    RegisterLadder(14500592, 14500593, 4501592);
    RegisterLadder(14500594, 14500595, 4501594);
    RegisterLadder(14500596, 14500597, 4501596);
    RegisterLadder(14500598, 14500599, 4501598);
});

Event(14505600, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 14500600);
    ReproduceObjectAnimation(4501600, 2);
    SetObjactState(4501601, -1, Disabled);
    EndUnconditionally(EventEndType.End);
    Label0();
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfObjactEventFlag(AND_01, 4503601);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetNetworkconnectedEventFlag(14500600, ON);
    SetObjactState(4501601, -1, Disabled);
    ForceAnimationPlayback(4501600, 1, true, false, false, 0, 1);
});

Event(14505610, Restart, function() {
    ActivateHitAndCreateNavimesh(4503611, Disabled);
    ActivateHitAndCreateNavimesh(4503612, Disabled);
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 14500610);
    ReproduceObjectDestruction(4501610, 1);
    ReproduceObjectAnimation(4501610, 2);
    SetObjactState(4501611, -1, Disabled);
    ReproduceObjectDestruction(4506610, 1);
    ActivateHitAndCreateNavimesh(4503612, Enabled);
    EndUnconditionally(EventEndType.End);
    Label0();
    ActivateHit(4503610, Disabled);
    ActivateHitAndCreateNavimesh(4503611, Enabled);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfObjactEventFlag(AND_01, 4503611);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetNetworkconnectedEventFlag(14500610, ON);
    SetObjactState(4501611, -1, Disabled);
    WaitFixedTimeSeconds(4);
    ActivateHitAndCreateNavimesh(4503611, Disabled);
    CreateDamagingObject(14505611, 4501610, 41, 6200, DamageTargetType.CharacterMap, 2, 3.3, 0);
    ForceAnimationPlayback(4501610, 1, true, true, false, 0, 1);
    ActivateHit(4503610, Enabled);
    ActivateHitAndCreateNavimesh(4503612, Enabled);
});

Event(14505611, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500610);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfObjactEventFlag(AND_01, 4503611);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeFrames(1);
    DisplayGenericDialog(10010884, PromptType.YESNO, NumberofOptions.NoButtons, 4501611, 3);
});

Event(14505620, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 14500620);
    DeactivateObject(4501620, Disabled);
    DeactivateObject(4501621, Enabled);
    SetObjactState(4501622, -1, Disabled);
    EndUnconditionally(EventEndType.End);
    Label0();
    DeactivateObject(4501620, Enabled);
    DeactivateObject(4501621, Disabled);
    SetMapSoundState(4504803, Enabled);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfObjactEventFlag(AND_01, 4503622);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_02, true);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 14505621);
    IfConditionGroup(OR_01, PASS, AND_01);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(MAIN, PASS, OR_01);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetNetworkconnectedEventFlag(14505621, ON);
    SetObjactState(4501622, -1, Disabled);
    SetMapSoundState(4504803, Disabled);
    WaitFixedTimeSeconds(3);
    SetEventFlag(14505521, ON);
    WaitFixedTimeFrames(1);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 14500743);
    SkipIfMultiplayerState(2, MultiplayerState.TryingtoCreateSession);
    PlayCutsceneToPlayer(45000030, CutscenePlayMode.Skippable, 10000);
    SkipUnconditionally(4);
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    PlayCutsceneToPlayer(45000030, CutscenePlayMode.UnskippableWithFadeOut, 10000);
    SkipUnconditionally(1);
    PlayCutsceneToPlayer(45000030, CutscenePlayMode.Unskippable, 10000);
    WaitFixedTimeFrames(1);
    GotoUnconditionally(Label.LABEL2);
    Label1();
    SkipIfMultiplayerState(2, MultiplayerState.TryingtoCreateSession);
    PlayCutsceneToPlayer(45000031, CutscenePlayMode.Skippable, 10000);
    SkipUnconditionally(4);
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    PlayCutsceneToPlayer(45000031, CutscenePlayMode.UnskippableWithFadeOut, 10000);
    SkipUnconditionally(1);
    PlayCutsceneToPlayer(45000031, CutscenePlayMode.Unskippable, 10000);
    WaitFixedTimeFrames(1);
    Label2();
    SetNetworkconnectedEventFlag(14500620, ON);
    SetEventFlag(14505521, OFF);
    DeactivateObject(4501620, Disabled);
    DeactivateObject(4501621, Enabled);
});

Event(14505630, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 64500630);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 64500630);
    IfObjactEventFlag(OR_01, 4503631);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 64500630);
    SetEventFlag(64500630, ON);
    ForceAnimationPlayback(4501630, 1, false, false, false, 0, 1);
    Label0();
    SetObjactState(4501630, -1, Disabled);
    SetObjactState(4501631, 1456500, Disabled);
});

Event(14505670, Restart, function() {
    SetNetworkSyncState(Disabled);
    IfCharacterDeadalive(AND_01, 4500350, DeathState.Dead, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_01);
    DeleteObjectEvent(14505672);
    DeleteObjectEvent(14505673);
    ForceAnimationPlayback(4501670, 0, true, false, false, 0, 1);
    DeactivateObject(4501670, Disabled);
    IfCharacterDeadalive(AND_02, 4500350, DeathState.Dead, ComparisonType.Equal, 1);
    IfObjectBackread(AND_02, 4501670, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_02);
    WaitFixedTimeSeconds(2);
    DeactivateObject(4501670, Enabled);
    ForceAnimationPlayback(4501670, 1, false, true, false, 0, 1);
    GotoUnconditionally(Label.LABEL1);
    Label0();
    IfObjectBackread(MAIN, 4501670, true, ComparisonType.Equal, 1);
    Label1();
    ForceAnimationPlayback(4501670, 2, true, false, false, 0, 1);
    RegisterLadder(14505672, 14505673, 4501670);
});

Event(14505680, Restart, function() {
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 4502120, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_01);
    EndUnconditionally(EventEndType.End);
    Label0();
    SetAreaWelcomeMessageState(Disabled);
});

Event(14505699, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    RequestObjectRestoration(4501530);
    RequestObjectRestoration(4501531);
    RequestObjectRestoration(4501532);
    RequestObjectRestoration(4501260);
});

// Sister Friede Kill
Event(14500800, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500800);
    IfCharacterHPRatio(MAIN, 4500800, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    SkipIfCharacterHasSpeffect(1, 4500800, 13146, false, ComparisonType.Equal, 1);
    WaitFixedTimeSeconds(2);
    WaitFixedTimeSeconds(1.5);
    PlaySE(4500800, SoundType.s_SFX, 777777777);
    WaitFixedTimeSeconds(1);
    SetEventFlag(14505803, ON);
    WaitFixedTimeSeconds(2.72);
    ChangeCharacterEnableState(4500800, Disabled);
    SetCharacterAnimationState(4500800, Disabled);
    HandleBossDefeatAndDisplayBanner(4500800, TextBannerType.HeirofFireDestroyed);
    SetEventFlag(14500800, ON);
    SetEventFlag(9322, ON);
    SetEventFlag(6322, ON);
    SetMapSoundState(4504804, Enabled);
    InitializeCommonEvent(20020019, 0); // Boss Kill
});

// Sister Friede - Boss Start
Event(14505810, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 14500800);
    ChangeCharacterEnableState(4505800, Disabled);
    SetCharacterAnimationState(4505800, Disabled);
    ForceCharacterDeath(4505800, false);
    SpawnMapSFX(4503800);
    SpawnMapSFX(4503810);
    SpawnMapSFX(4503811);
    SpawnMapSFX(4503812);
    SpawnMapSFX(4503813);
    SpawnMapSFX(4503814);
    SpawnMapSFX(4503815);
    SpawnMapSFX(4503816);
    SpawnMapSFX(4503817);
    SpawnMapSFX(4503818);
    SpawnMapSFX(4503819);
    SpawnMapSFX(4503820);
    DeactivateObject(4506800, Disabled);
    DeactivateObject(4501810, Disabled);
    DeactivateObject(4501820, Disabled);
    DeactivateObject(4501821, Disabled);
    DeactivateObject(4501822, Disabled);
    DeactivateObject(4501823, Enabled);
    SetMapSoundState(4504804, Enabled);
    EndUnconditionally(EventEndType.End);
    
    Label0();
    ChangeCharacterEnableState(4500800, Disabled);
    SetCharacterAnimationState(4500800, Disabled);
    SetCharacterAIState(4500800, Disabled);
    SetCharacterAIState(4500801, Disabled);
    SetLockOnPoint(4500803, 220, Disabled);
    SetCharacterImmortality(4500803, Enabled);
    SetCharacterInvincibility(4500803, Enabled);
    SetCharacterHPBarDisplay(4500803, Disabled);
    ForceAnimationPlayback(4500803, 30000, true, false, false, 0, 1);
    ChangeCharacterEnableState(4500802, Disabled);
    SetCharacterAnimationState(4500802, Disabled);
    SetCharacterAIState(4500802, Disabled);
    DeactivateObject(4506801, Disabled);
    DeactivateObject(4501821, Disabled);
    DeactivateObject(4501822, Disabled);
    DeactivateObject(4501823, Disabled);
    MoveBloodstainAndDroppedItems(4502826, 4502827);
    MoveBloodstainAndDroppedItems(4502828, 4502829);
    IfCharacterType(OR_15, 10000, TargetType.BlackPhantom, ComparisonType.Equal, 1);
    IfCharacterInvadeType(OR_15, 10000, 7, ComparisonType.Equal, 1);
    IfCharacterInvadeType(OR_15, 10000, 21, ComparisonType.Equal, 1);
    IfCharacterInvadeType(OR_15, 10000, 4, ComparisonType.Equal, 1);
    EndIfConditionGroupStateUncompiled(EventEndType.End, PASS, OR_15);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 14500801);
    ChangeCharacterEnableState(4500801, Disabled);
    SetCharacterAnimationState(4500801, Disabled);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 74500300);
    IfActionButtonInArea(AND_01, 9373, 4500803);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SendInvadingPhantomsHome(0);
    SetEventFlag(14505521, ON);
    WaitFixedTimeFrames(1);
    DeleteMapSFX(4503825, false);
    DeleteMapSFX(4503826, false);
    DeleteMapSFX(4503827, false);
    DeleteMapSFX(4503828, false);
    DeleteMapSFX(4503829, false);
    SkipIfMultiplayerState(2, MultiplayerState.TryingtoCreateSession);
    PlayCutsceneAndWarpPlayer(45000000, CutscenePlayMode.Skippable, 4502810, 45, 0, 10000);
    SkipUnconditionally(4);
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    PlayCutsceneAndWarpPlayer(45000000, CutscenePlayMode.UnskippableWithFadeOut, 4502810, 45, 0, 10000);
    SkipUnconditionally(1);
    PlayCutsceneToPlayer(45000000, CutscenePlayMode.Unskippable, 10000);
    WaitFixedTimeFrames(1);
    SetEventFlag(14505521, OFF);
    SpawnMapSFX(4503825);
    SpawnMapSFX(4503826);
    SpawnMapSFX(4503827);
    SpawnMapSFX(4503828);
    SpawnMapSFX(4503829);
    ChangeCharacterEnableState(4500801, Enabled);
    SetCharacterAnimationState(4500801, Enabled);
    WarpCharacterAndCopyFloor(4500801, TargetEntityType.Area, 4502811, -1, 4500801);
    SetCharacterEventTarget(4500801, 10000);
    ForceAnimationPlayback(4500803, 30002, true, false, false, 0, 1);
    GotoUnconditionally(Label.LABEL2);
    
    Label1();
    ForceAnimationPlayback(4500803, 30002, true, false, false, 0, 1);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14505805);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 4502800, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SendInvadingPhantomsHome(0);
    GotoUnconditionally(Label.LABEL2);
    
    Label2();
    SetCharacterAIState(4500801, Enabled);
    SetNetworkUpdateRate(4500801, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(4500803, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 4500801, 0, 906020);
    SetNetworkconnectedEventFlag(14500801, ON);
    InitializeCommonEvent(20020119, 0); // Boss Start
});

Event(14505811, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500800);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14505805);
    IfCharacterDeadalive(AND_01, 4500801, DeathState.Dead, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    DeleteMapSFX(4503825, false);
    DeleteMapSFX(4503826, false);
    DeleteMapSFX(4503827, false);
    DeleteMapSFX(4503828, false);
    DeleteMapSFX(4503829, false);
    SetEventFlag(14505521, ON);
    WaitFixedTimeFrames(1);
    SkipIfMultiplayerState(2, MultiplayerState.TryingtoCreateSession);
    PlayCutsceneAndWarpPlayer(45000010, CutscenePlayMode.Skippable, 4502812, 45, 0, 10000);
    SkipUnconditionally(4);
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    PlayCutsceneAndWarpPlayer(45000010, CutscenePlayMode.UnskippableWithFadeOut, 4502812, 45, 0, 10000);
    SkipUnconditionally(1);
    PlayCutsceneToPlayer(45000010, CutscenePlayMode.Unskippable, 10000);
    WaitFixedTimeFrames(1);
    SetEventFlag(14505521, OFF);
    SpawnMapSFX(4503825);
    SpawnMapSFX(4503826);
    SpawnMapSFX(4503827);
    SpawnMapSFX(4503828);
    SpawnMapSFX(4503829);
    ChangeCharacterEnableState(4500801, Disabled);
    SetCharacterAnimationState(4500801, Disabled);
    ChangeCharacterEnableState(4500800, Enabled);
    SetCharacterAnimationState(4500800, Enabled);
    SetCharacterAIState(4500800, Enabled);
    SetNetworkUpdateRate(4500800, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterHPBarDisplay(4500800, Disabled);
    ChangeCharacterEnableState(4500803, Disabled);
    SetCharacterAnimationState(4500803, Disabled);
    ChangeCharacterEnableState(4500802, Enabled);
    SetCharacterAnimationState(4500802, Enabled);
    SetCharacterAIState(4500802, Enabled);
    SetNetworkUpdateRate(4500802, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 4500802, 0, 906021);
    DeactivateObject(4501810, Disabled);
    DeactivateObject(4501811, Disabled);
    DeactivateObject(4506800, Disabled);
    DeactivateObject(4506801, Enabled);
    ReproduceObjectDestruction(4506810, 1);
    DeactivateObject(4501820, Disabled);
    DeactivateObject(4501823, Enabled);
    SpawnMapSFX(4503800);
    SpawnMapSFX(4503810);
    SpawnMapSFX(4503811);
    SpawnMapSFX(4503812);
    SpawnMapSFX(4503813);
    SpawnMapSFX(4503814);
    SpawnMapSFX(4503815);
    SpawnMapSFX(4503816);
    SpawnMapSFX(4503817);
    SpawnMapSFX(4503818);
    SpawnMapSFX(4503819);
    SpawnMapSFX(4503820);
    SetCharacterEventTarget(4500800, 4500802);
    CreateReferredDamagePair(4500800, 4500802);
    SetNetworkconnectedEventFlag(14505802, ON);
});

Event(14505812, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500800);
    IfCharacterHPValue(MAIN, 4500802, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    SetSpeffect(4500800, 13133);
    WaitFixedTimeFrames(1);
    SkipIfCharacterHasSpeffect(1, 4500800, 13134, true, ComparisonType.Equal, 1);
    ForceAnimationPlayback(4500800, 20003, false, false, false, 0, 1);
    WaitFixedTimeFrames(2);
    PlaySE(4500800, SoundType.s_SFX, 777777777);
    IfCharacterDeadalive(MAIN, 4500802, DeathState.Dead, ComparisonType.Equal, 1);
    EnableBossMapSound(-1, Disabled);
    DisplayBossHealthBar(Disabled, 4500802, 0, 906021);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    WaitFixedTimeSeconds(2.5);
    AwardItemLot(4700);
    WaitFixedTimeSeconds(6.5);
    SetNetworkconnectedEventFlag(74500332, ON);
});

Event(14505813, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500800);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 74500332);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(1.1);
    WaitFixedTimeFrames(1);
    SkipIfCharacterHasSpeffect(2, 4500800, 13136, true, ComparisonType.Equal, 1);
    ForceAnimationPlayback(4500800, 20001, false, false, false, 0, 1);
    SkipUnconditionally(2);
    ForceAnimationPlayback(4500800, 20002, false, false, false, 0, 1);
    WaitFixedTimeFrames(1);
    IfCharacterHasEventMessage(OR_01, 4500800, 10, true, ComparisonType.Equal, 1);
    IfElapsedSeconds(OR_01, 6);
    IfConditionGroup(MAIN, PASS, OR_01);
    DisplayBossHealthBar(Enabled, 4500800, 0, 906022);
    IfCharacterHasEventMessage(OR_02, 4500800, 20, true, ComparisonType.Equal, 1);
    IfElapsedSeconds(OR_02, 4.2);
    IfConditionGroup(MAIN, PASS, OR_02);
    EnableBossMapSound(4504802, Enabled);
    ClearSpeffect(4500800, 13132);
    EndUnconditionally(EventEndType.End);
});

Event(14505820, Restart, function() {
    SetNetworkSyncState(Disabled);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500800);
    IfCharacterDeadalive(AND_09, 4500802, DeathState.Dead, ComparisonType.Equal, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL9, PASS, AND_09);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 14505802);
    IfEntityInoutsideRadiusOfEntity(AND_01, InsideOutsideState.Outside, 10000, 4500802, 16, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL1, PASS, AND_01);
    IfEntityInoutsideRadiusOfEntity(AND_02, InsideOutsideState.Inside, 10000, 4500802, 16, 1);
    IfEntityInoutsideRadiusOfEntity(AND_02, InsideOutsideState.Outside, 10000, 4500802, 9, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL2, PASS, AND_02);
    IfEntityInoutsideRadiusOfEntity(AND_03, InsideOutsideState.Inside, 10000, 4500802, 9, 1);
    GotoIfConditionGroupStateUncompiled(Label.LABEL3, PASS, AND_03);
    Label1();
    ChangeCamera(-1, -1);
    WaitFixedTimeSeconds(0.5);
    IfEntityInoutsideRadiusOfEntity(OR_01, InsideOutsideState.Inside, 10000, 4500802, 16, 1);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 14500800);
    IfConditionGroup(MAIN, PASS, OR_01);
    GotoUnconditionally(Label.LABEL0);
    Label2();
    ChangeCamera(6011, 6011);
    WaitFixedTimeSeconds(0.5);
    IfEntityInoutsideRadiusOfEntity(OR_02, InsideOutsideState.Outside, 10000, 4500802, 16, 1);
    IfEntityInoutsideRadiusOfEntity(OR_02, InsideOutsideState.Inside, 10000, 4500802, 9, 1);
    IfEventFlag(OR_02, ON, TargetEventFlagType.EventFlag, 14500800);
    IfConditionGroup(MAIN, PASS, OR_02);
    GotoUnconditionally(Label.LABEL0);
    Label3();
    ChangeCamera(6010, 6010);
    WaitFixedTimeSeconds(0.5);
    IfEntityInoutsideRadiusOfEntity(OR_03, InsideOutsideState.Outside, 10000, 4500802, 9, 1);
    IfEventFlag(OR_03, ON, TargetEventFlagType.EventFlag, 14500800);
    IfConditionGroup(MAIN, PASS, OR_03);
    GotoUnconditionally(Label.LABEL0);
    Label0();
    GotoIfEventFlag(Label.LABEL9, ON, TargetEventFlagType.EventFlag, 14500800);
    EndUnconditionally(EventEndType.Restart);
    Label9();
    ChangeCamera(-1, -1);
    WaitFixedTimeSeconds(0.5);
    EndUnconditionally(EventEndType.End);
});

Event(14505825, Restart, function() {
    SetNetworkSyncState(Disabled);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500800);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14505805);
    SetCharacterMaphit(4500803, true);
    SetCharacterGravity(4500803, Disabled);
    IfCharacterBackreadStatus(AND_01, 4500803, true, ComparisonType.Equal, 1);
    IfObjectBackread(AND_01, 4501810, true, ComparisonType.Equal, 1);
    IfObjectBackread(AND_01, 4501811, true, ComparisonType.Equal, 1);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 4502824, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14505805);
    WaitFixedTimeFrames(1);
    IssueShortWarpRequest(4500803, TargetEntityType.Area, 4502825, -1);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 14505805);
    IfCharacterBackreadStatus(OR_01, 4500803, false, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, OR_01);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14505805);
    EndUnconditionally(EventEndType.Restart);
});

Event(14505829, Restart, function() {
    InitializeCommonEvent(20005800, 14500800, 4501800, 4502800, 14505805, 4501800, 4505800, 14500801, 0);
    InitializeCommonEvent(20005801, 14500800, 4501800, 4502800, 14505805, 4501800, 14505806);
    SkipIfEventFlag(2, ON, TargetEventFlagType.EventFlag, 14500801);
    InitializeCommonEvent(20001837, 14500800, 14505805, 14505806, 14505810, 4504801, 4504802, 14505802, 14505803);
    SkipUnconditionally(1);
    InitializeCommonEvent(20005832, 14500800, 14505805, 14505806, 4502800, 4504801, 4504802, 14505802, 14505803);
    InitializeCommonEvent(20005825, 14500800, 4501800, 3, 14500801, 110);
    InitializeCommonEvent(20005820, 14500800, 4501801, 0, 14500801);
    InitializeCommonEvent(20005810, 14500800, 4501800, 4502800, 10000);
});

Event(14505830, Restart, function() {
    SetSpeffect(4500171, 12700);
    SetCharacterAIState(4500171, Disabled);
    SetCharacterAnimationState(4500171, Disabled);
    ChangeCharacterEnableState(4500171, Disabled);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14505841);
    SetCharacterAnimationState(4500170, Disabled);
    ChangeCharacterEnableState(4500170, Disabled);
});

Event(14505831, Restart, function() {
    SetNetworkSyncState(Disabled);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500800);
    WaitFixedTimeSeconds(0.5);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1638);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1637);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1636);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 14505840);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 14505841);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14500620);
    IfCharacterBackreadStatus(AND_01, 4500171, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    ChangeCharacterEnableState(4500171, Enabled);
    WaitFixedTimeSeconds(1.5);
    WarpCharacterAndCopyFloor(4500171, TargetEntityType.Area, 4502830, -1, 4500171);
    CreateObjectfollowingSFX(4501170, 0, 30001);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_02, false);
    IfActionButtonInArea(AND_02, 9334, 4501170);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 14500800);
    IfConditionGroup(MAIN, PASS, OR_01);
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 14500800);
    DeleteObjectfollowingSFX(4501170, true);
    ChangeCharacterEnableState(4500171, Disabled);
    EndUnconditionally(EventEndType.End);
    Label0();
    DisplayGenericDialogAndSetEventFlags(10012500, PromptType.YESNO, NumberofOptions.TwoButtons, 4501170, 3, 14505848, 14505849, 14505849);
    EndIfEventFlag(EventEndType.Restart, OFF, TargetEventFlagType.EventFlag, 14505848);
    DisplayMessage(10012520, 1);
    WaitFixedTimeSeconds(5);
    DeleteObjectfollowingSFX(4501170, true);
    ChangeCharacterEnableState(4500171, Disabled);
    SetNetworkconnectedEventFlag(14505840, ON);
});

Event(14505832, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14505840);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 14505841);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14505802);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    DisplayMessage(10012600, 1);
    SkipUnconditionally(1);
    DisplayMessage(10012610, 1);
    WaitFixedTimeFrames(1);
    SpawnOneshotSFX(TargetEntityType.Character, 4500170, 236, 30300);
    ChangeCharacterEnableState(4500170, Enabled);
    SetCharacterAnimationState(4500170, Enabled);
    SetCharacterDefaultBackreadState(4500170, Enabled);
    ForceAnimationPlayback(4500170, 63010, false, false, false, 0, 1);
    SetCharacterEventTarget(4500170, 4500800);
    SetNetworkconnectedEventFlag(14505841, ON);
    SetSpeffect(4500800, 13123);
    SetSpeffect(4500802, 13124);
});

Event(14505833, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14505841);
    IfCharacterDeadalive(AND_01, 4500170, DeathState.Dead, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    DisplayMessage(10012602, 1);
    SkipUnconditionally(1);
    DisplayMessage(10012612, 1);
    SetCharacterDefaultBackreadState(4500170, Disabled);
    SetNetworkconnectedEventFlag(14505841, OFF);
});

Event(14505834, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500800);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14505841);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14500800);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(3);
    SetSpeffect(4500170, 13270);
    WaitFixedTimeSeconds(1);
    ChangeCharacterEnableState(4500170, Disabled);
    SetCharacterAnimationState(4500170, Disabled);
    SetCharacterDefaultBackreadState(4500170, Disabled);
    SetNetworkconnectedEventFlag(14505841, OFF);
});

// Triad Kill
Event(14500860, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500860); // End if Lordran Remnants is dead
    IfCharacterHPRatio(AND_01, 4500860, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1); // If Lordran Remnants is 0 HP
    IfCharacterHPRatio(AND_01, 4500861, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1); // If Lordran Remnants is 0 HP
    IfCharacterHPRatio(AND_01, 4500862, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1); // If Lordran Remnants is 0 HP

    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(2);
    PlaySE(4500800, SoundType.s_SFX, 777777777);
    
    IfCharacterDeadalive(AND_02, 4500860, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(AND_02, 4500861, DeathState.Dead, ComparisonType.Equal, 1);
    IfCharacterDeadalive(AND_02, 4500862, DeathState.Dead, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_02);
    
    DisplayBossHealthBar(Disabled, 4500860, 0, 30000);
    DisplayBossHealthBar(Disabled, 4500861, 1, 30001);
    DisplayBossHealthBar(Disabled, 4500862, 2, 30002);
    
    HandleBossDefeat(4500860);
    SetEventFlag(14500860, ON);
    SetEventFlag(9323, ON);
    SetEventFlag(6323, ON);
    SetEventFlag(14500861, ON);
    InitializeCommonEvent(20020020, 0); // Boss Kill
});

// Triad - Boss Setup
Event(14505870, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 14500860); // If Lordran Remnants is alive
    
    ForceCharacterDeath(4500860, false);
    ChangeCharacterEnableState(4500860, Disabled);
    SetCharacterAnimationState(4500860, Disabled);
    
    ForceCharacterDeath(4500861, false);
    ChangeCharacterEnableState(4500861, Disabled);
    SetCharacterAnimationState(4500861, Disabled);
    
    ForceCharacterDeath(4500862, false);
    ChangeCharacterEnableState(4500862, Disabled);
    SetCharacterAnimationState(4500862, Disabled);
    
    EndUnconditionally(EventEndType.End);
    
    Label0();
    ChangeCharacterEnableState(4500860, Disabled);
    ChangeCharacterEnableState(4500861, Disabled);
    ChangeCharacterEnableState(4500862, Disabled);
    SetCharacterAIState(4500860, Disabled);
    SetCharacterAIState(4500861, Disabled);
    SetCharacterAIState(4500862, Disabled);
    
    IfEntityInoutsideRadiusOfEntity(AND_09, InsideOutsideState.Inside, 10000, 4500860, 30, 1);
    IfInoutsideArea(AND_09, InsideOutsideState.Inside, 10000, 4502860, 1);
    IfConditionGroup(OR_01, PASS, AND_09);
    IfConditionGroup(MAIN, PASS, OR_01);
    GotoUnconditionally(Label.LABEL2);
    
    Label1();
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14505865);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 4502860, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    GotoUnconditionally(Label.LABEL2);
    
    Label2();
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SendInvadingPhantomsHome(0);
    
    CreateBulletOwner(4500930);
    
    InitializeEvent(0, 14505876, 4500930); // Gough's Arrows 
    SetNetworkconnectedEventFlag(14505861, ON);
    
    // Phase 1 - The Lord's Blade
    ShootBullet(4500930, 4502940, -1, 280000100, 0, 0, 0);
    
    ChangeCharacterEnableState(4500860, Enabled);
    SetCharacterAIState(4500860, Enabled);
    SetNetworkUpdateRate(4500860, true, CharacterUpdateFrequency.AlwaysUpdate);
    ActivateMultiplayerdependantBuffs(4500860);
    DisplayBossHealthBar(Enabled, 4500860, 0, 30000);
    
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetNetworkUpdateAuthority(4500860, AuthorityLevel.Forced);
    
    InitializeCommonEvent(20020120, 0); // Boss Start
    
    IfCharacterHPRatio(MAIN, 4500860, ComparisonType.LessOrEqual, 0.1, ComparisonType.Equal, 1);
    
    // Phase 2 - The Dragonslayer
    ShootBullet(4500930, 4502940, -1, 280000100, 0, 0, 0);
    
    ChangeCharacterEnableState(4500861, Enabled);
    SetCharacterAIState(4500861, Enabled); 
    SetNetworkUpdateRate(4500861, true, CharacterUpdateFrequency.AlwaysUpdate);
    ActivateMultiplayerdependantBuffs(4500861);
    DisplayBossHealthBar(Enabled, 4500861, 1, 30001);
    
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetNetworkUpdateAuthority(4500861, AuthorityLevel.Forced);
    
    IfCharacterHPRatio(MAIN, 4500861, ComparisonType.LessOrEqual, 0.1, ComparisonType.Equal, 1);
    
    // Phase 3 - The Abyss Walker
    ShootBullet(4500930, 4502940, -1, 280000100, 0, 0, 0);
    
    ChangeCharacterEnableState(4500862, Enabled);
    SetCharacterAIState(4500862, Enabled); 
    SetNetworkUpdateRate(4500862, true, CharacterUpdateFrequency.AlwaysUpdate);
    ActivateMultiplayerdependantBuffs(4500862);
    DisplayBossHealthBar(Enabled, 4500862, 2, 30002);

    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetNetworkUpdateAuthority(4500862, AuthorityLevel.Forced);
});

// Gough's Arrow
Event(14505876, Restart, function(X0_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500860);
    CreateBulletOwner(X0_4);
    
    ShootBullet(X0_4, 4502930, -1, 280000000, 0, 0, 0);
    WaitRandomTimeSeconds(10, 20);

    EndUnconditionally(EventEndType.Restart);
});

Event(14505880, Restart, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 50006910);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfCharacterDeadalive(AND_01, 4500860, DeathState.Dead, ComparisonType.Equal, 1); // If Lordran Remnants is dead
    IfConditionGroup(MAIN, PASS, AND_01);
    AwardItemLot(59100);
});

Event(14505889, Restart, function() {
    // Lordran Remnants - Boss Setup
    InitializeCommonEvent(20005800, 14500860, 4501860, 4502860, 14505865, 4501860, 4505860, 14505861, 0);
    // Lordran Remnants - Enter Fogwall
    InitializeCommonEvent(20005801, 14500860, 4501860, 4502860, 14505865, 4501860, 14505866);
    
    // Lordran Remnants - Boss Sound State
    InitializeCommonEvent(20005831, 14500860, 14505865, 14505866, 4502860, 4504861, 4504862, 14505863);
    // Lordran Remnants - Toggle Fogwall State
    InitializeCommonEvent(20005820, 14500860, 4501860, 5, 14505861);
    // Lordran Remnants - Enter Fogwall
    InitializeCommonEvent(20005810, 14500860, 4501860, 4502860, 10000);
});

Event(14505890, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500890);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14500800);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14500860); // If Lordran Remnants is dead
    IfConditionGroup(MAIN, PASS, AND_01);
    SetEventFlag(14500890, ON);
});

// Vilhelm - Spawn State
Event(14505700, Default, function(X0_4, X4_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1655, 1659);
    BatchSetNetworkconnectedEventFlags(1655, 1659, OFF);
    SetNetworkconnectedEventFlag(1655, ON);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1656);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70001052);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1655, 1659, OFF);
    SetNetworkconnectedEventFlag(1655, ON);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1640, 1654);
    BatchSetNetworkconnectedEventFlags(1640, 1654, OFF);
    SetNetworkconnectedEventFlag(1640, ON);
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1655);
    Label9();
    SetEventFlag(70001052, OFF);
    SkipIfEventFlag(3, ON, TargetEventFlagType.EventFlag, 1658);
    SetEventFlag(74500120, OFF);
    SetEventFlag(74500131, OFF);
    SetEventFlag(74500132, OFF);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 1640);
    SetEventFlag(74500121, OFF);
    SetEventFlag(74500122, OFF);
    Label10();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1640);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1641);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    EndUnconditionally(EventEndType.End);
    Label0();
    SetCharacterTalkRange(X4_4, 100);
    SetCharacterImmortality(X0_4, Enabled);
    SetCharacterHPBarDisplay(X0_4, Disabled);
    ForceAnimationPlayback(X0_4, 91100, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    Label1();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1658);
    SetCharacterTalkRange(X4_4, 100);
    EndUnconditionally(EventEndType.End);
    Label18();
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    ForceCharacterTreasure(X4_4);
    EndUnconditionally(EventEndType.End);
});

Event(14505701, Default, function(X0_4) {
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 74500121);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 74500122);
    IfCharacterHasEventMessage(AND_02, X0_4, 90, true, ComparisonType.Equal, 1);
    IfConditionGroup(OR_01, PASS, AND_02);
    IfConditionGroup(AND_01, PASS, OR_01);
    IfConditionGroup(MAIN, PASS, AND_01);
    Label0();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
});

Event(14500702, Default, function(X0_4, X4_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 1658);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetEventFlag(14500702, OFF);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    IfInoutsideArea(AND_15, InsideOutsideState.Inside, 10000, 4502700, 1);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_15, false);
    IfConditionGroup(MAIN, PASS, AND_15);
    SetEventFlag(74500132, ON);
    SetEventFlag(14500702, ON);
    ChangeCharacterEnableState(X4_4, Enabled);
    SetCharacterBackreadState(X4_4, false);
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    SetSpeffect(X4_4, 5020);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 1640);
    BatchSetNetworkconnectedEventFlags(1640, 1654, OFF);
    SetNetworkconnectedEventFlag(1641, ON);
    Label10();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceAnimationPlayback(X4_4, 63010, false, false, false, 0, 1);
    RequestCharacterAIReplan(X4_4);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 74500131);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    ClearSpeffect(X4_4, 5020);
});

Event(14505703, Default, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfBatchEventFlags(EventEndType.End, LogicalOperationType.AllON, TargetEventFlagType.EventFlag, 50006520, 50006521);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, 1658);
    AwardItemLot(55200);
});

Event(14505710, Default, function(X0_4, X4_4, X8_4, X12_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1675, 1679);
    BatchSetNetworkconnectedEventFlags(1675, 1679, OFF);
    SetNetworkconnectedEventFlag(1675, ON);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1676);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70001053);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1675, 1679, OFF);
    SetNetworkconnectedEventFlag(1675, ON);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1678);
    IfCharacterHPRatio(AND_02, X0_4, ComparisonType.NotEqual, 0, ComparisonType.Equal, 1);
    IfCharacterHPRatio(AND_02, X4_4, ComparisonType.NotEqual, 0, ComparisonType.Equal, 1);
    SkipIfConditionGroupStateUncompiled(3, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1675, 1679, OFF);
    SetNetworkconnectedEventFlag(1675, ON);
    SetEventFlag(74500181, ON);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1660, 1674);
    BatchSetNetworkconnectedEventFlags(1660, 1674, OFF);
    SetNetworkconnectedEventFlag(1660, ON);
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1675);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1660);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 14500610);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 74500182);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
    BatchSetNetworkconnectedEventFlags(1660, 1674, OFF);
    SetNetworkconnectedEventFlag(1661, ON);
    Label9();
    SetEventFlag(70001053, OFF);
    SetEventFlag(74500185, OFF);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 74500155);
    SetEventFlag(74500184, ON);
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, 74500155);
    BatchSetEventFlags(14505715, 14505719, OFF);
    RandomlySetEventFlagInRange(14505715, 14505719, ON);
    GotoUnconditionally(Label.LABEL10);
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, 9322);
    BatchSetEventFlags(14505715, 14505719, OFF);
    SetEventFlag(14505719, ON);
    GotoUnconditionally(Label.LABEL10);
    BatchSetEventFlags(14505715, 14505719, OFF);
    RandomlySetEventFlagInRange(14505715, 14505717, ON);
    Label10();
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 14500715);
    ForceAnimationPlayback(X4_4, 20, false, false, false, 0, 1);
    GotoUnconditionally(Label.LABEL20);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 14500716);
    ForceAnimationPlayback(X4_4, 30001, false, false, false, 0, 1);
    GotoUnconditionally(Label.LABEL20);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 14500717);
    ForceAnimationPlayback(X4_4, 30002, false, false, false, 0, 1);
    GotoUnconditionally(Label.LABEL20);
    SkipIfBatchEventFlags(2, LogicalOperationType.AllOFF, TargetEventFlagType.EventFlag, 14500718, 14500719);
    ForceAnimationPlayback(X4_4, 30003, false, false, false, 0, 1);
    GotoUnconditionally(Label.LABEL20);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 14505715);
    ForceAnimationPlayback(X4_4, 20, false, false, false, 0, 1);
    GotoUnconditionally(Label.LABEL20);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 14505716);
    ForceAnimationPlayback(X4_4, 30001, false, false, false, 0, 1);
    GotoUnconditionally(Label.LABEL20);
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 14505717);
    ForceAnimationPlayback(X4_4, 30002, false, false, false, 0, 1);
    GotoUnconditionally(Label.LABEL20);
    SkipIfBatchEventFlags(1, LogicalOperationType.AllOFF, TargetEventFlagType.EventFlag, 14505718, 14505719);
    ForceAnimationPlayback(X4_4, 30003, false, false, false, 0, 1);
    Label20();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1660);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1661);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    EndUnconditionally(EventEndType.End);
    Label0();
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1678);
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    SetCharacterHPBarDisplay(X0_4, Disabled);
    SetObjectInvulnerability(X8_4, Enabled);
    EndUnconditionally(EventEndType.End);
    Label18();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
    Label1();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1678);
    SetCharacterHPBarDisplay(X4_4, Disabled);
    SetCharacterGravity(X4_4, Disabled);
    SetCharacterMaphit(X4_4, true);
    RequestObjectRestoration(X12_4);
    SetObjectInvulnerability(X12_4, Enabled);
    EndUnconditionally(EventEndType.End);
    Label18();
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    ForceCharacterTreasure(X4_4);
    EndUnconditionally(EventEndType.End);
});

Event(14505711, Default, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 74500182);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, 4502715, 1);
    SetEventFlag(74500182, ON);
});

Event(14505712, Default, function(X0_4, X4_4, X8_4, X12_4) {
    EndIfBatchEventFlags(EventEndType.End, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1661, 1674);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1675);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1660);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14500610);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 74500182);
    IfCharacterBackreadStatus(AND_01, X0_4, false, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    BatchSetNetworkconnectedEventFlags(1660, 1674, OFF);
    SetNetworkconnectedEventFlag(1661, ON);
    Label10();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetObjectInvulnerability(X8_4, Disabled);
    SetCharacterHPBarDisplay(X4_4, Disabled);
    ChangeCharacterEnableState(X4_4, Enabled);
    SetCharacterBackreadState(X4_4, false);
    SetCharacterGravity(X4_4, Disabled);
    SetCharacterMaphit(X4_4, true);
    SetObjectInvulnerability(X12_4, Enabled);
});

Event(14505713, Default, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 74500183);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1675);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1661);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 74500153);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 4502716, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetCharacterTalkRange(X0_4, 100);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1675);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1661);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 74500153);
    IfInoutsideArea(AND_02, InsideOutsideState.Inside, 10000, 4502717, 1);
    IfConditionGroup(MAIN, PASS, AND_02);
    SetEventFlag(74500183, ON);
});

Event(14505714, Default, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    IfEntityInoutsideRadiusOfEntity(MAIN, InsideOutsideState.Inside, 10000, X0_4, 4.9, 1);
    BatchSetEventFlags(74500185, 74500189, OFF);
    RandomlySetEventFlagInRange(74500185, 74500189, ON);
    WaitFixedTimeSeconds(1);
    IfEntityInoutsideRadiusOfEntity(MAIN, InsideOutsideState.Outside, 10000, X0_4, 5, 1);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 74500189);
    ForceAnimationPlayback(X0_4, 20001, false, true, false, 0, 1);
    EndUnconditionally(EventEndType.Restart);
});

Event(14505720, Default, function(X0_4) {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 9322);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 9322);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 1678);
    IfConditionGroup(MAIN, PASS, AND_01);
    BatchSetEventFlags(14505715, 14505719, OFF);
    SetEventFlag(14505719, ON);
    ForceAnimationPlayback(X0_4, 30003, false, false, false, 0, 1);
});

Event(14505721, Default, function(X0_4, X4_4) {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 1678);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X4_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1678);
    IfConditionGroup(MAIN, PASS, AND_01);
    WaitFixedTimeSeconds(2);
    SetObjectInvulnerability(X0_4, Disabled);
});

Event(14505730, Default, function(X0_4, X4_4, X8_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1695, 1699);
    BatchSetNetworkconnectedEventFlags(1695, 1699, OFF);
    SetNetworkconnectedEventFlag(1695, ON);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1696);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70001054);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1695, 1699, OFF);
    SetNetworkconnectedEventFlag(1695, ON);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1680, 1694);
    BatchSetNetworkconnectedEventFlags(1680, 1694, OFF);
    SetNetworkconnectedEventFlag(1680, ON);
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1695);
    Label9();
    SetEventFlag(70001054, OFF);
    SetEventFlag(14500731, OFF);
    Label10();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1680);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1681);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    EndUnconditionally(EventEndType.End);
    Label0();
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1698);
    SetCharacterHPBarDisplay(X0_4, Disabled);
    ForceAnimationPlayback(X0_4, 709, false, false, false, 0, 1);
    RequestObjectRestoration(X4_4);
    SetObjectInvulnerability(X4_4, Enabled);
    EndUnconditionally(EventEndType.End);
    Label18();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
    Label1();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1698);
    SetCharacterHPBarDisplay(X8_4, Disabled);
    ForceAnimationPlayback(X8_4, 710, false, false, false, 0, 1);
    EndUnconditionally(EventEndType.End);
    Label18();
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    ForceCharacterTreasure(X8_4);
    EndUnconditionally(EventEndType.End);
});

Event(14505731, Default, function(X0_4, X4_4) {
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 14500731);
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, 1680);
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL1, true);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfCharacterHasSpeffect(AND_01, X0_4, 5450, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_02, false);
    IfCharacterHasSpeffect(AND_02, X0_4, 5450, false, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_02);
    Label1();
    IfPlayerIsNotInOwnWorldExcludesArena(AND_03, false);
    IfEntityInoutsideRadiusOfEntity(AND_03, InsideOutsideState.Inside, 10000, X0_4, 30, 1);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_04, false);
    IfEntityInoutsideRadiusOfEntity(AND_04, InsideOutsideState.Outside, 10000, X0_4, 30, 1);
    IfConditionGroup(OR_01, PASS, AND_03);
    IfConditionGroup(OR_01, PASS, AND_04);
    IfConditionGroup(MAIN, PASS, OR_01);
    EndIfConditionGroupStateCompiled(EventEndType.Restart, PASS, AND_04);
    Label0();
    SetObjectInvulnerability(X4_4, Disabled);
    DestroyObject(X4_4);
    SetEventFlag(14500731, ON);
});

Event(14505732, Default, function(X0_4, X4_4, X8_4) {
    EndIfBatchEventFlags(EventEndType.End, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1681, 1694);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 1698);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 9322);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1680);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1695);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    BatchSetNetworkconnectedEventFlags(1680, 1694, OFF);
    SetNetworkconnectedEventFlag(1681, ON);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetObjectInvulnerability(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Enabled);
    SetCharacterBackreadState(X8_4, false);
    SetCharacterHPBarDisplay(X8_4, Disabled);
    ForceAnimationPlayback(X8_4, 710, false, false, false, 0, 1);
});

Event(14505733, Default, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14500733);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1698);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 9322);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetNetworkconnectedEventFlag(14500733, ON);
});

Event(14505740, Default, function(X0_4, X4_4, X8_4, X12_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1715, 1719);
    BatchSetNetworkconnectedEventFlags(1715, 1719, OFF);
    SetNetworkconnectedEventFlag(1715, ON);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1716);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70001055);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1715, 1699, OFF);
    SetNetworkconnectedEventFlag(1715, ON);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1700, 1714);
    BatchSetNetworkconnectedEventFlags(1700, 1714, OFF);
    SetNetworkconnectedEventFlag(1700, ON);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1700);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 14500801);
    SkipIfConditionGroupStateUncompiled(4, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1700, 1714, OFF);
    SetNetworkconnectedEventFlag(1701, ON);
    BatchSetNetworkconnectedEventFlags(1715, 1719, OFF);
    SetNetworkconnectedEventFlag(1718, ON);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1700);
    IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 9322);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
    BatchSetNetworkconnectedEventFlags(1700, 1714, OFF);
    SetNetworkconnectedEventFlag(1702, ON);
    Label9();
    SetEventFlag(70001055, OFF);
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 74500251);
    SetEventFlag(74500281, ON);
    SetEventFlag(14500743, OFF);
    Label10();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1700);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1701);
    GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1702);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
    Label0();
    SetCharacterMaphit(X0_4, true);
    SetCharacterGravity(X0_4, Disabled);
    ForceAnimationPlayback(X0_4, 30000, true, false, false, 0, 1);
    SetCharacterImmortality(X0_4, Enabled);
    SetCharacterHPBarDisplay(X0_4, Disabled);
    RequestObjectRestoration(X12_4);
    SetObjectInvulnerability(X12_4, Enabled);
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    SetCharacterTalkRange(X4_4, 100);
    SetCharacterTalkRange(X8_4, 100);
    EndUnconditionally(EventEndType.End);
    Label1();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X0_4);
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    SetCharacterTalkRange(X4_4, 100);
    SetCharacterTalkRange(X8_4, 100);
    EndUnconditionally(EventEndType.End);
    Label2();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
});

Event(14505741, Default, function(X0_4, X4_4) {
    EndIfEventFlag(EventEndType.End, OFF, TargetEventFlagType.EventFlag, 1700);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14500801);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfConditionGroup(MAIN, PASS, AND_01);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X0_4);
    SetObjectInvulnerability(X4_4, Disabled);
    SkipIfNumberOfClientsOfType(4, ClientType.Invader, ComparisonType.Equal, 0);
    BatchSetNetworkconnectedEventFlags(1700, 1714, OFF);
    SetNetworkconnectedEventFlag(1701, ON);
    BatchSetNetworkconnectedEventFlags(1715, 1719, OFF);
    SetNetworkconnectedEventFlag(1718, ON);
    EndUnconditionally(EventEndType.End);
});

Event(14505742, Default, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 74500282);
    IfInoutsideArea(MAIN, InsideOutsideState.Inside, 10000, 4502710, 1);
    SetEventFlag(74500282, ON);
});

Event(14500743, Default, function(X0_4, X4_4) {
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventIDSlotNumber, 0);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfCharacterHasEventMessage(AND_01, X0_4, 90, true, ComparisonType.Equal, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    Label0();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetObjectInvulnerability(X4_4, Disabled);
});

Event(14505750, Default, function(X0_4, X4_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1735, 1739);
    BatchSetNetworkconnectedEventFlags(1735, 1739, OFF);
    SetNetworkconnectedEventFlag(1735, ON);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1736);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70001056);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1735, 1739, OFF);
    SetNetworkconnectedEventFlag(1735, ON);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1720, 1734);
    BatchSetNetworkconnectedEventFlags(1720, 1734, OFF);
    SetNetworkconnectedEventFlag(1720, ON);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1720);
    IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 9322);
    SkipIfConditionGroupStateUncompiled(4, FAIL, AND_02);
    BatchSetNetworkconnectedEventFlags(1720, 1734, OFF);
    SetNetworkconnectedEventFlag(1721, ON);
    BatchSetNetworkconnectedEventFlags(1735, 1739, OFF);
    SetNetworkconnectedEventFlag(1738, ON);
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1735);
    Label9();
    SetEventFlag(70001056, OFF);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 14500801);
    SetEventFlag(74500300, OFF);
    SetEventFlag(74500301, OFF);
    SetEventFlag(74500332, OFF);
    Label10();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1720);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 1721);
    EndUnconditionally(EventEndType.End);
    Label0();
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    SetCharacterTalkRange(X0_4, 100);
    SetCharacterTalkRange(X4_4, 100);
    EndUnconditionally(EventEndType.End);
    Label1();
    EndUnconditionally(EventEndType.End);
});

Event(14505770, Default, function(X0_4) {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1795, 1799);
    BatchSetNetworkconnectedEventFlags(1795, 1799, OFF);
    SetNetworkconnectedEventFlag(1795, ON);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 1796);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 70001059);
    SkipIfConditionGroupStateUncompiled(2, FAIL, AND_01);
    BatchSetNetworkconnectedEventFlags(1795, 1799, OFF);
    SetNetworkconnectedEventFlag(1795, ON);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1780, 1794);
    BatchSetNetworkconnectedEventFlags(1780, 1794, OFF);
    SetNetworkconnectedEventFlag(1780, ON);
    GotoIfEventFlag(Label.LABEL9, OFF, TargetEventFlagType.EventFlag, 1795);
    Label9();
    SetEventFlag(70001059, OFF);
    SetEventFlag(74500381, OFF);
    Label10();
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 1780);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndUnconditionally(EventEndType.End);
    Label0();
    GotoIfEventFlag(Label.LABEL18, ON, TargetEventFlagType.EventFlag, 1798);
    ForceAnimationPlayback(X0_4, 703, false, false, false, 0, 1);
    SetCharacterHPBarDisplay(X0_4, Disabled);
    SkipIfNumberOfClientsOfType(1, ClientType.Invader, ComparisonType.Equal, 0);
    SetCharacterTalkRange(X0_4, 100);
    EndUnconditionally(EventEndType.End);
    Label18();
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X0_4);
    EndUnconditionally(EventEndType.End);
});

Event(14505771, Default, function() {
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 74500382);
    SetEventFlag(74500382, ON);
    EndUnconditionally(EventEndType.End);
    Label0();
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 74000013);
    WaitFixedTimeSeconds(4.5);
    GotoUnconditionally(Label.LABEL2);
    Label1();
    WaitFixedTimeSeconds(5.5);
    Label2();
    SetEventFlag(74500381, ON);
});

Event(14505780, Default, function() {
    GotoIfPlayerIsNotInOwnWorldExcludesArena(Label.LABEL10, true);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1635, 1639);
    BatchSetNetworkconnectedEventFlags(1635, 1639, OFF);
    SetNetworkconnectedEventFlag(1635, ON);
    SkipIfBatchEventFlags(2, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1620, 1634);
    BatchSetNetworkconnectedEventFlags(1620, 1634, OFF);
    SetNetworkconnectedEventFlag(1620, ON);
    IfBatchEventFlags(AND_05, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 1621, 1622);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 6952);
    IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 148);
    SkipIfConditionGroupStateUncompiled(4, FAIL, AND_05);
    BatchSetNetworkconnectedEventFlags(1620, 1634, OFF);
    SetNetworkconnectedEventFlag(1625, ON);
    BatchSetNetworkconnectedEventFlags(1635, 1639, OFF);
    SetNetworkconnectedEventFlag(1638, ON);
    Label10();
});

Event(14505900, Restart, function() {
    SetSpeffect(4500483, 5000);
    SetSpeffect(4500484, 5000);
    SetSpeffect(4500485, 5000);
});

Event(14505910, Restart, function() {
    SetSpeffect(4500212, 13027);
});

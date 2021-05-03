<?php

$response = [
    'message' => "Bonjour, ca gazouille",
    'user' => 'Doe Douille',
    'profile' => [
        'address'=>'Quelque part dans le sud!',
        'number'=> 'oufti!',
        'sex'=> 'XD'
    ]
];
echo json_encode($response);

exit();
<?php
    // echo "uh";

    function save($experiment, $userCode, $experimentID) {
        $cut_experiment = str_replace("[[", "", $experiment);
        $cut_experiment = str_replace("]]", "", $cut_experiment);
        $cut_experiment = str_replace(", ", ",", $cut_experiment);
        
        $joined_string = $userCode . "," . $experimentID . "," . $cut_experiment;
        
        // echo $joined_string . "<br>\n";
        
        // Write to file
        $myfile = file_put_contents('data.ocsv', $joined_string.PHP_EOL , FILE_APPEND | LOCK_EX);
    }




    $key = $_POST["key"];
    
    if (strcmp(strtoupper(hash("sha256", $key)),  "B45D441A4E66CB424E544C653C15423A228BB27FC8C7A9D2D3F1BA4BA1B859C2") != 0) {
        echo "key is wrong";
        die(-1);
    }
    
    $userCode = $_POST["userCode"];
    // echo "USER CODE: " . $userCode . ";";
    $experimentID = $_POST["experimentID"];
    $data = $_POST["data"];
    
    
    
    // Generate CSV output string
    
    // First, parse the experimental data
    $num_experiments_sent = substr_count($data, "], [") + 1;
    $starting_experiment_ID = $experimentID - $num_experiments_sent;
    
    // echo "cool";
    
    $experiments = explode("], [", $data);
    foreach ($experiments as &$experiment) {
        save($experiment, $userCode, $experimentID);
    }
    
    
    
    
    
    
?>
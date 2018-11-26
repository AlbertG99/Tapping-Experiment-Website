<?php
    // Check if data has been received.
    $done = $_POST["done"];
    
    $data_received = false;
    
    if ($done == 10884) {  // Data has been received; proceed to save it, &c.
        $data_received = true;
        
        echo "We rollin' bois";
        
        //The url you wish to send the POST request to
        $url = "https://andrew.fi/tests/tapping_experiment/save.php";
        
        //The data you want to send via POST
        $fields = [
            'key' => '2F7E0461B3F2D3D9D0F977DB9B7CCCA055DDC78AE1EE00C52DD982ED91E7F355',
            'userCode'      => '100',
            'experimentID' => '6',
            'data'         => '[[408.1, 991, 1407.6, 1608.1, 1751.3, 1910.9, 2031.7, 2160.5, 2295.4, 2423.8, 2551.3, 2671.1, 2807.1, 2944.1, 3199.9, 3344.5, 3487.3, 3631, 3767.1, 3910.9], [142.2, 263.8, 614.3, 773.8, 942.2, 1103.4, 1231.3, 1373.9, 1517.8, 1662.2, 1798.2, 1942.2, 2086.7, 2230.8, 2349.8, 2501.7, 2749.8, 2917.8, 3064.2, 3221.4, 3382, 3541.8, 3696.4, 3846, 3997.9, 4157.7, 4310.1, 4430, 4589.7, 4885.8]]'
        ];
        
        //url-ify the data for the POST
        $fields_string = http_build_query($fields);
        
        //open connection
        $ch = curl_init();
        
        //set the url, number of POST vars, POST data
        curl_setopt($ch,CURLOPT_URL, $url);
        curl_setopt($ch,CURLOPT_POST, count($fields));
        curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
        
        //So that curl_exec returns the contents of the cURL; rather than echoing it
        curl_setopt($ch,CURLOPT_RETURNTRANSFER, true); 
        
        //execute post
        $result = curl_exec($ch);
        echo $result;
        
    }
?>


<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<title>Tapping Experiment</title>
<link rel="stylesheet" href="css/style.css">
</head>

<body id="container">
	<?php
        if ($data_received) {
            echo "<!--";
        }
    ?>
	<div>
		<img id="fullscreen_button"
			src="https://static.thenounproject.com/png/280-200.png">
	</div>
	<div id="setup_sound">
		<h1>Welcome!</h1>
		<p id="js_check" style="color: red;">
			<b>WARNING!</b> JavaScript is required for this experiment to
			function properly, but it seems to be disabled on your computer. We
			recommend using the Google Chrome browser for best performance.
		</p>
		<h3>Setup:</h3>
		<p>1. Configure sound</p>
		<p>
			Please adjust the volume bar below so that the loudness of the beeps
			is about that of the chirps of a bird sitting four feet from you. If
			you cannot hear the beeps even at higher volume levels, make sure
			your system/computer volume is on. If you do not hear any beeps,
			please do not proceed to the next step, but <a
				href="mailto:albertg@mit.edu">contact the researcher</a>.
		</p>
		<div class="slidecontainer">
			<input type="range" min="1" max="100" value="10" class="slider"
				id="slider">
		</div>
		<p id="sound">
			<b>Current sound</b>: 10%
		</p>
		<p>When you are done configuring the sound settings, click the
			“NEXT” button to proceed to the next step.</p>
		<button type="button" class="nextButton fixed" id="toKey">NEXT</button>
	</div>
	<div id="setup_key" style="display: none;">
		<h3>Setup:</h3>
		<p>2. Choose key</p>
		<p>Please select your preferred key. Do this by pressing a single
			key on your keyboard that you would be comfortable tapping with your
			pointer finger for an extended period of time. The key you select
			will appear below. You may select any key, including the space bar.</p>
		<p id="key">
			<b>Current key</b>: z
		</p>
		<p>When you are done configuring the key settings, click the
			“NEXT” button to proceed to the experiment instructions.</p>
		<button type="button" class="nextButton fixed" id="toInstr0">NEXT</button>
	</div>
	<div id="instr_0" style="display: none;">
		<h3>Instructions:</h3>
		<p>Please pay careful attention to the following instructions.</p>
		<button type="button" class="nextButton fixed" id="toInstr1">NEXT</button>
	</div>
	<div id="instr_1" style="display: none;">
		<h3>Instructions:</h3>
		<p id="instr_1_text">1. Place your hand in a comfortable position
			with your pointer finger on the key you selected (z), like in the
			photo example below.</p>
		<p>
			<img src="images/instr_1.jpg" height="300px">
		</p>
		<button type="button" class="nextButton fixed" id="toInstr2">NEXT</button>
	</div>
	<div id="instr_2" style="display: none;">
		<h3>Instructions:</h3>
		<p>2. You will hear a sequence of beeps. We would like you to tap
			(completely press and then release the key) in synch with the beeps.
			Try to complete each key press at the same time as each beep. Try to
			be as accurate as possible. Some sequences are challenging. Just do
			your best to press the key at the same time as the beep. For each
			beep, just press the key once and then lift the key.</p>
		<p>
			<img src="images/instr_2.png" height="280px">
		</p>
		<button type="button" class="nextButton fixed" id="toInstr3">NEXT</button>
	</div>
	<div id="instr_3" style="display: none;">
		<h3>Instructions:</h3>
		<p>3. Once the sequence of beeps stops, keep tapping the key to
			continue the sequence as if the beeps were still there. Keep
			continuing the sequence until you see the word STOP.</p>
		<p>NOTE: Treat each sequence independently of the others.</p>
		<button type="button" class="nextButton fixed" id="toDemo">NEXT</button>
	</div>
	<div id="demo" style="display: none;">
		<h3>Demo:</h3>
		<p>Please watch the video demonstration of an example sequence.</p>
		<video width="569" height="320" controls>
			<source src="images/demo_vid.mp4" type="video/mp4">
			Your browser does not support the video tag.
		</video>
		<button type="button" class="nextButton fixed" id="toPractice">NEXT</button>
	</div>
	<div id="practice" style="display: none;">
		<h3>Practice Round:</h3>
		<p>Now you will perform a practice sequence. Remember to press the
			key you selected in synch with the beeps.</p>
		<button type="button" class="nextButton fixed" id="toRound">NEXT</button>
	</div>
	<div id="practiceRound" style="display: none;">
		<h3 id="statusPractice">Status: Ready</h3>
		<p id="key_reminder2">Remember, you selected the following key to
			tap: z</p>
		<button type="button" id="buttonPractice" style="background: grey;"
			class="nextButton expButton" onclick="startPractice()">Click
			to Start</button>
		<p id="recorded2" style="display: none;">Key presses successfully
			recorded.</p>
		<button type="button" class="nextButton fixed" id="toPre">NEXT</button>
	</div>
	<div id="pre" style="display: none;">
		<h3>Get ready!</h3>
		<p>Now you will do some real sequences. Some will be more
			difficult than others. Please do your best to press the key in synch
			with the beeps as accurately as possible.</p>
		<button type="button" class="nextButton fixed" id="toExperiment">NEXT</button>
	</div>
	<div id="experiment" style="display: none;">
		<h3 id="status">Status: Ready</h3>
		<p id="key_reminder">Remember, you selected the following key to
			tap: z</p>
		<p id="printReactionTime"></p>
		<button type="button" id="button" style="background: grey;"
			class="nextButton expButton" onclick="nextExperiment()">Click
			to Start</button>
		<p id="recorded" style="display: none;">Key presses successfully
			recorded.</p>
		<div id="counters">
			<p id="complete">Sequences complete: 0/20</p>
			<p id="money">Money made: $0.00</p>
		</div>
		<form method="post" action="index.php">
			<input type="hidden" name="done" id="done" value="10884" /> <input
				type="hidden" name="userCode" id="userCode" value="" /> <input
				type="hidden" name="experimentID" id="experimentID" value="" /> <input
				type="hidden" name="data" id="data" value="" /> <input
				type="submit" class="nextButton fixed" id="toDone">FINISH</input>
		</form>
		<!-- <button type="button" class="nextButton fixed" id="toDone"
			style="display: block;">FINISH</button> -->
	</div>
	<?php
        if ($data_received) {
            echo "-->";
        }
    ?>
	<div id="done"
		<?php if(!$data_received) {echo "style=\"display:none;\";";}?>>
		<h1>Thank you!</h1>
		<h3>Experiment complete!</h3>
		<p>Please enter the following code in Mechanical Turk:</p>
		<p id="code"></p>
		<p id="result"></p>
		<p id="complete1">Sequences complete: 0/20</p>
		<p id="money1">Money earned: $0.00</p>
		<p>If you're curious, here's a quick summary of your results!</p>
		<div id="plot"></div>
	</div>
	<div id="footer">
		<p>
			If you encounter technical issues at any time, please <a
				href="mailto:albertg@mit.edu">contact the researcher</a>.
		</p>
	</div>
	<script src="js/index.js"></script>
	<script type="text/javascript"
		src="https://cdn.emailjs.com/sdk/2.2.4/email.min.js"></script>
	<script src="js/plotly-latest.min.js"></script>
	<script type="text/javascript">
		(function() {
			emailjs.init("user_tOpOcKdDC8xFnj1IWMGDn");
		})();
	</script>
</body>
</html>
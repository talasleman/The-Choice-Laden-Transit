


let container = document.querySelector(".container");
let btn = document.getElementById("generate");
let number = Math.ceil(Math.random() * 1000);

btn.onclick = function () {

    number += Math.ceil(Math.random() * 1000);


    var workout =
        [
            { title1: 'Chest and Triceps', desc1: 'Bench press: 3 sets of 8-12 reps with 60-90 seconds rest between sets <br><br> Incline dumbbell press: 3 sets of 8-12 reps with 60-90 seconds rest between sets <br><br> Tricep dips: 3 sets of 8-12 reps with 60-90 seconds rest between sets <br><br>Close grip bench press: 3 sets of 8-12 reps with 60-90 seconds rest between sets <br><br>Cable tricep extensions: 3 sets of 8-12 reps with 60-90 seconds rest between sets' },
            { title1: 'Back and Biceps', desc1: 'Pull-ups: 3 sets of 8-12 reps with 60-90 seconds rest between sets <br><br> Bent over rows: 3 sets of 8-12 reps with 60-90 seconds rest between sets <br><br> Seated cable rows: 3 sets of 8-12 reps with 60-90 seconds rest between sets <br><br> Dumbbell curls: 3 sets of 8-12 reps with 60-90 seconds rest between sets <br><br> Hammer curls: 3 sets of 8-12 reps with 60-90 seconds rest between sets' },
            { title1: 'Legs and Core', desc1: 'Squats: 3 sets of 8-12 reps with 60-90 seconds rest between sets<br><br>Lunges: 3 sets of 8-12 reps per leg with 60-90 seconds rest between sets<br><br>Leg press: 3 sets of 8-12 reps with 60-90 seconds rest between sets <br><br>Calf raises: 3 sets of 8-12 reps with 60-90 seconds rest between sets<br><br>Deadlifts: 3 sets of 8-12 reps with 60-90 seconds rest between sets <br><br>Planks: 3 sets of 1 minute with 60-90 seconds rest between sets <br><br>Russian twists: 3 sets of 12-15 reps with 60-90 seconds rest between sets <br><br>Sit-ups: 3 sets of 12-15 reps with 60-90 seconds rest between sets' },
            { title1: 'Shoulder and traps', desc1: 'Military press: 3 sets of 8-12 reps with 60-90 seconds rest between sets<br><br>Lateral raises: 3 sets of 8-12 reps with 60-90 seconds rest between sets<br><br>Front raises: 3 sets of 8-12 reps with 60-90 seconds rest between sets<br><br>Upright rows: 3 sets of 8-12 reps with 60-90 seconds rest between sets<br><br>Shrugs: 3 sets of 8-12 reps with 60-90 seconds rest between sets' },
            { title1: 'Full-Body', desc1: 'Squats: 3 sets of 8-12 reps with 60-90 seconds rest between sets<br><br>Bench press: 3 sets of 8-12 reps with 60-90 seconds rest between sets<br><br>Pull-ups: 3 sets of 8-12 reps with 60-90 seconds rest between sets<br><br>Military press: 3 sets of 8-12 reps with 60-90 seconds rest between sets<br><br>Deadlifts: 3 sets of 8-12 reps with 60-90 seconds rest between sets' },
            { title1: 'Fully-Body', desc1: 'Chest press: 3 sets of 8-12 reps<br><br>Lat pulldown: 3 sets of 8-12 rep<br><br>Leg press: 3 sets of 8-12 reps<br><br>Leg curls: 3 sets of 8-12 reps<br><br>Leg extensions: 3 sets of 8-12 reps<br><br>Seated row: 3 sets of 8-12 reps<br><br>Shoulder press: 3 sets of 8-12 reps<br><br>Bicep curls: 3 sets of 8-12 reps<br><br>Tricep pushdowns: 3 sets of 8-12 reps' },
            { title1: 'Chest and Triceps Machine', desc1: 'Chest press: 3 sets of 8-12 reps, 1-2 minutes rest between sets<br><br>Tricep pushdowns: 3 sets of 8-12 reps, 1-2 minutes rest between sets' },
            { title1: 'Back and Biceps Machine', desc1: 'Lat pulldown: 3 sets of 8-12 reps, 1-2 minutes rest between sets<br><br>Seated row: 3 sets of 8-12 reps, 1-2 minutes rest between sets<br><br>Bicep curls: 3 sets of 8-12 reps, 1-2 minutes rest between sets' },
            { title1: 'Legs Machine', desc1: 'Leg press: 3 sets of 8-12 reps, 1-2 minutes rest between sets<br><br>Leg curls: 3 sets of 8-12 reps, 1-2 minutes rest between sets<br><br>Leg extensions: 3 sets of 8-12 reps, 1-2 minutes rest between sets' },
            { title1: 'Full-Body Machine and Free Weights', desc1: 'Bench press: 3 sets of 8-12 reps, 1-2 minutes rest between sets<br><br>Leg press: 3 sets of 8-12 reps, 1-2 minutes rest between sets<br><br>Standing military press: 3 sets of 8-12 reps, 1-2 minutes rest between sets<br><br>Bicep curls: 3 sets of 8-12 reps, 1-2 minutes rest between sets<br><br>Tricep dips: 3 sets of 8-12 reps, 1-2 minutes rest between sets<br><br>Squats: 3 sets of 8-12 reps, 1-2 minutes rest between sets<br><br>Deadlifts: 3 sets of 8-12 reps, 1-2 minutes rest between sets' },
            { title1: 'Chest Circuit More Plates more Dates', desc1: 'Chest press 3 sets of 10 reps <br><br>Incline dumbbel press 3 sets of 10 reps<br><br>Seated chest fly 3 sets of 12 reps <br><br>Lateral raises 3 sets of 10 reps<br><br>Dip 3 sets of 8 reps <br><br> Dumbbel pullover 3 sets of 10 reps' },
            { title1: 'Back Circuit More Plates more Dates', desc1: 'Barbell deadlift 2 sets of 8 reps<br><br>Bent-over row 2 sets of 8 reps<br><br>Pull up 2 sets of reps till failure<br><br>Lat pulldown 2 sets of 8 reps<br><br>T-bar row 2 sets of 8 reps<br><br>Inverted row 2 sets 8 reps' },
            { title1: 'Arms Circuit More Plates more Dates', desc1: 'Barbelle curl 2 sets of 6-8 reps<br><br>Chin-up 3 sets of reps till failure<br><br>Dumbbell hammer curl 4 sets of 6-8 reps<br><br> Overhead triceps press 4 sets of 6-8 reps<br><br>Triceps pushdown 4 sets of 6-8 reps' },
            { title1: 'Legs Circuit More Plates more Dates', desc1: 'Leg extension 3 sets of 8 reps<br><br>Barbell squat 3 sets of 8 reps<br><br>Deadlift 3 sets 8 reps<br><br>Seated leg curl 3 sets 8 reps<br><br>Walking lunge 3 sets 8 reps' },
            { title1: 'Fully-Body Joe Rogan style', desc1: 'Superset<br>(a) Dumbbell Pullover: 4 sets of 10 reps, no rest<br>(b) Pull-Up: 4 sets of 10 reps, 60-second rest<br><br> Seated Row (supinated grip): 4 sets of 15, 10, 8, 6 reps, 30-second rest<br><br> T-Bar Row: 3 sets of 12, 10, 8 reps, 30-second rest<br><br> Behind Neck Pull-down: 3 sets of 12, 10, 8 reps, 30-second rest<br><br> Superset<br>(a) Deadlift: 3 sets to failure, no rest<br><br> Cable Pulldown: 3 sets to failure, 60-second rest' },
            { title1: 'Fully-Body Joe Rogan style', desc1: ' Superset<br>(a) Leg Extension: 4 sets of 10 reps, no rest<br>(b) Leg Curl: 4 sets of 10 reps, 60-second rest<br><br> Walking Lunge: 3 sets of 10 reps, 30-second rest <br><br>Squat: 4 sets of 15, 12, 10, 8 reps, 30-second rest <br><br> Superset <br>(a) Pistol Squat: 3 sets of 10 reps, no rest<br>(b) Bodyweight Squat: 3 sets of 10 reps, 60-second rest' },
            { title1: 'Full-Body Joe Rogan style', desc1: ' Lat Pull-down: 3 sets of 15, 12, 10 reps, 30-second rest<br><br>Deadlift: 3 sets of 15, 12, 10 reps, 30-second rest<br><br>Seated Row: 3 sets of 15, 12, 10 reps, 30-second rest<br><br>Muscle-up: 3 sets to failure, 60-second rest<br><br>Cable Fly: 3 sets of 15, 12, 10 reps, 30-second rest<br><br>Incline Dumbbell Press: 3 sets of 12, 10, 8 reps, 30-second rest<br><br>Flat Bench Press: 3 sets of 12, 10, 8 reps, 30-second rest' }

        ];

    var rando = workout[Math.floor(Math.random() * workout.length)];



    document.getElementById("workout-title").innerHTML = rando.title1;

    document.getElementById("workout").innerHTML = rando.desc1;





}
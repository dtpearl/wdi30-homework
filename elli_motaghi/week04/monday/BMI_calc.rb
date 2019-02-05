# BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight

# A BMI of 25.0 or more is overweight, while the healthy range is 18.5 to 24.9.

require "pry"
require 'rainbow'

# binding.pry



def bmi_calculator
    puts Rainbow("=*" * 8).green
    puts Rainbow(" BMI Calculator ").black.bg(:white)
    puts Rainbow("=*" * 8).green
    puts Rainbow("Please enter your height(cm): ").yellow
    $height = gets.to_f
    puts Rainbow("Please enter your weight(kg): ").yellow
    $weight = gets.to_f
end

bmi_calculator
bmi = ($weight / (($height/100) ** 2)).round(2)
puts Rainbow("Your BMI is #{bmi}.").cyan.underline

if bmi >= 25.0
    puts Rainbow("Your weight appears to be a bit above the ideal range. You should consider losing a few kilograms. You might like to talk to your doctor about whether you need to set yourself a new target for a healthy weight.").indianred + Rainbow(" To lose weight, you will generally need to decrease the amount of energy (food) you take in by eating fewer kilojoules as part of a healthy diet; and to make it easier still, increase the amount of energy you use by doing more physical activity. If you are at all concerned or have any health problems, check with your doctor before you start any new exercise programs or eating plans. And do not be disheartened or de-motivated if progress is slow as you try to get your weight within a healthy range.").red + Rainbow(" It is important to decide on small, practical changes that you feel comfortable with and that you will be able to stick to. It is helpful to get support from family when you are trying to change your weight.").magenta
elsif (bmi >= 18.5 && bmi <= 24.9)
    puts Rainbow("Your BMI is currently within what is considered a healthy weight range. Being a healthy weight has important benefits, not only on how you feel, but also to help reduce your risk of heart disease, diabetes and a range of other conditions.").indianred
else 
    puts Rainbow("Your weight is less than it ideally should be. See your doctor or health professional and discuss whether you may need to aim at gaining weight. Being underweight may be associated with lack of some vitamins and minerals that can affect important body functions, such as your immune response to infection and fertility or it can lead to a multitude of health issues from heart disease to bone problems.").indianred + Rainbow(" Talk to your doctor about your BMI and what small, practical changes you feel comfortable with to get back to a healthy weight.").red
end



#include <iostream>
#include <string>
#include <limits>

double addNumbers(double a, double b) {
    return a + b;
}

int main()
{
    std::cout << "Enter two numbers to get their sum" << '\n';
    std::cout << "Enter q to quit";

    double num1;
    double num2;
    std::string input;

    while(true)
    {
        std::cout << "\nEnter first number: ";
        std::cin >> input;

        if (input == "q" || input == "Q")
        {
            std::cout << "Goodbay!" << '\n';
            break;
        }

        try
        {
            num1 = std::stod(input);

            std::cout << "\nEnter second number: ";
            std::cin >> input;

            num2 = std::stod(input);

            double result = addNumbers(num1, num2);
            std::cout << "Sum: " << num1 << " + " << num2 << " = " << result << '\n';

        }
        catch (const std::exception& ex)
        {
            std::cout << "Invalid input. Please enter numbers only" << '\n';
            std::cin.clear();
            std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
        }
    }

    return 0;
}
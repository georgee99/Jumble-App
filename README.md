# Jumble-App

## Functionality
_Note: Instance is currently terminated_

Jumble is designed to transform a given string input according to specific instructions. The function takes two parameters as input: a string and an integer n, where n should be between 1 and 1000. The function follows the following rules to modify each character in the input string:

1. If the character is a letter of the alphabet (a, b, c, ..., z), it will shift it to the right in the alphabet by n letters. If the shift results in reaching 'z', the function will wrap around and continue from 'a' as many times as necessary.
2. If the character is a number (1, 2, 3, ...) or a space, it will remain unchanged.
3. If the character is any other character, it will be removed from the string.

## Usage <a name="usage"></a>

To utilize the Jumble-App API and apply the "jumble" transformation to a given word, you must make POST requests to the API endpoint: http://ec2-13-210-73-150.ap-southeast-2.compute.amazonaws.com:5000/api/jumble/:n. Here, :n represents the number of letters by which the characters will shift.
### Request Format
* URL: http://ec2-13-210-73-150.ap-southeast-2.compute.amazonaws.com:5000/api/jumble/:n
  * Replace :n with the desired number of letter shifts (n should be a positive integer).
* Method: POST
* Request Body: JSON payload with the following parameter
  * word: The word you want to jumble.

### Example 
If you want to jumble the word "hello" with a shift of 3 letters, make a POST request to the following URL:
```bash
http://ec2-13-210-73-150.ap-southeast-2.compute.amazonaws.com:5000/api/jumble/3
```
with the following JSON payload
```json
{
  "word": "aaa"
}
```

#### Response
The API will respond with the jumbled message as follows:
```json
{
    "jumbledMessage": "ddd"
}
```
## Setting up environment

### Prerequisites
1. Node.js: Download and install Node.js from the official website: https://nodejs.org

### Clone the project
First, clone the project repository to your local machine using Git. Open your terminal or command prompt and execute the following command:
```
git clone https://github.com/georgee99/Jumble-App.git
```
### Install dependencies
Once you have cloned the project, cd into the project's root directory and install all the required dependencies with the following command:
```
npm install
```
### Running Tests
To run the tests, you can run the command "npx jest tests/main.test.js
```
npx jest tests/main.test.js
```
## Design
### Libraries used

1. **Express.js**: A fast, minimal, and flexible web framework for Node.js used to handle HTTP requests and define endpoints.
2. **Body-parser**: Middleware for parsing JSON data in incoming HTTP requests.

### Core Functionality
The core functionality of the API includes the implementation of a "jumble" function, which is used to modify input data based on specific rules. This functionality is defined in a separate file named **main.js**. The "jumble" function is designed to take input data and perform a transformation, as required by the project's specifications.

### API Server Setup
The API server is started on port 3000 using the **listen** method provided by Express.js. This allows the API to listen for incoming HTTP requests on the specified port, making it accessible to clients.
The Jumble-App API exposes the following endpoints:
* **GET /:**
  * Description: The root endpoint that returns a simple emoji message "🚀".
  * Response: 🚀
* **POST /api/jumble/:n**
  * Description: The endpoint to perform the "jumble" transformation on the provided word. Details provided in the [usage](#usage) section
## Deployment instructions

Prerequisite: Ensure you have AWS CLI downloaded and authenticated prior, as you need to use the CLI 

1. Create the express application
2. Dockerize the application by creating a Dockerfile. node:14 was the base image
3. Build and Verify the Docker Image
   - Use the **'docker build'** command to build the Docker image from the Dockerfile
   - Run the image locally using **''docker run'**' to verify that the application is working as expected
5. Create an Amazon ECR Repository
6. Use the push commands in the repository ECR in the AWS CLI
   - Authenticate using the **''aws ecr get-login-password'**' command
   - Build and tag the image
	- Use docker push to push the image to the AWS ECR repository 
7. In the AWS Management Console, create a new Amazon ECS cluster. This cluster will host the containers and set up an EC2 instance as the launch type.
8. In the ECS cluster, create a new task definition and add a container to it. Use the Image URL from the ECR repository created earlier for the container.
9. Navigate to the ECS cluster and run the task using the task definition created in the previous step.
10. Edit the security group inbound rules for the EC2 instance to allow access to the application from anywhere
11. In the EC2 dashboard, the public DNS address of the EC2 instance will be found, and is used to access the application.

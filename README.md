# DecipherIQ

This application can identify the type of hash or encryption used in any given cipher text! This tool leverages the power of OpenAI’s API to analyze the input and provide detailed insights about the encryption or hashing method used.

## Features

- Identify the type of hash or encryption used in any given cipher text: This application can analyze any cipher text and provide detailed insights about the encryption or hashing method used.

- Leverage the power of OpenAI’s API: This tool uses OpenAI’s API to analyze the input and provide results.

- Easy to install and use: The installation process is straightforward, and the application is easy to use.

- Free and open-source: This application is free to use and open-source, so you can modify it to suit your needs.

## Installation

### Prerequisites

Ensure you have the following installed:

- OpenAI API Key
- Python 3.6 or later
- Flask

### Cloning the Repository

Clone the repository using the following command:
```bash
git clone https://github.com/kuladeepmantri/DecipherIQ.git
```

### Installing Dependencies

1. Navigate to the project folder:
```bash
cd DecipherIQ
```

2. Install the required packages using the following command:
```bash
pip install -r requirements.txt
```

### OpenAI API 

To set the OpenAI API key as an environment variable, follow these steps:

1. Open the terminal or command prompt.
2 . Type "export OPENAI_API_KEY=<your_api_key>" and press Enter. Replace <your_api_key> with your actual API key.
3. Run the following command to verify that the environment variable has been set correctly:
```bash
echo $OPENAI_API_KEY
```

If you’re using Windows, you can set the environment variable by following these steps:

- Open the Start menu and search for “Environment Variables”.
- Click on “Edit the system environment variables”.
- Click on the “Environment Variables” button.
- Under “User variables”, click on “New”.
- Enter OPENAI_API_KEY as the variable name and your API key as the variable value.
- Click “OK” to save the changes.
- After setting the environment variable, you can run the Cipher Identifier application by following the instructions I provided earlier.

### Usage

Once you have Python installed, follow these steps:

1. Clone the repository to your local machine.
2. Open the terminal or VS Code and navigate to the root directory of the project.
3. Run the following command to start the application:
```bash
python app.py
```

If you haven’t installed Flask yet, you can do so by running pip install flask in the terminal.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

const allFlashcards = [
    {
        "q": "1. Step one\n\nChoices:\na. Data Understanding\nb. Business Understanding\nc. Data preparation\nd. Modeling\ne. Deployment\nf. Evaluation",
        "a": "b. Business Understanding",
        "cat": "BEBO",
        "opts": [
            "Data Understanding",
            "Business Understanding",
            "Data preparation",
            "Modeling",
            "Deployment",
            "Evaluation"
        ],
        "correct": 1
    },
    {
        "q": "2. Step two\n\nChoices:\na. Data Understanding\nb. Business Understanding\nc. Data preparation\nd. Modeling\ne. Deployment\nf. Evaluation",
        "a": "a. Data Understanding",
        "cat": "BEBO",
        "opts": [
            "Data Understanding",
            "Business Understanding",
            "Data preparation",
            "Modeling",
            "Deployment",
            "Evaluation"
        ],
        "correct": 0
    },
    {
        "q": "3. Step three\n\nChoices:\na. Data Understanding\nb. Business Understanding\nc. Data preparation\nd. Modeling\ne. Deployment\nf. Evaluation",
        "a": "c. Data preparation",
        "cat": "BEBO",
        "opts": [
            "Data Understanding",
            "Business Understanding",
            "Data preparation",
            "Modeling",
            "Deployment",
            "Evaluation"
        ],
        "correct": 2
    },
    {
        "q": "4. Step four\n\nChoices:\na. Data Understanding\nb. Business Understanding\nc. Data preparation\nd. Modeling\ne. Deployment\nf. Evaluation",
        "a": "d. Modeling",
        "cat": "BEBO",
        "opts": [
            "Data Understanding",
            "Business Understanding",
            "Data preparation",
            "Modeling",
            "Deployment",
            "Evaluation"
        ],
        "correct": 3
    },
    {
        "q": "5. Step five\n\nChoices:\na. Data Understanding\nb. Business Understanding\nc. Data preparation\nd. Modeling\ne. Deployment\nf. Evaluation",
        "a": "f. Evaluation",
        "cat": "BEBO",
        "opts": [
            "Data Understanding",
            "Business Understanding",
            "Data preparation",
            "Modeling",
            "Deployment",
            "Evaluation"
        ],
        "correct": 5
    },
    {
        "q": "6. Step six\n\nChoices:\na. Data Understanding\nb. Business Understanding\nc. Data preparation\nd. Modeling\ne. Deployment\nf. Evaluation",
        "a": "e. Deployment",
        "cat": "BEBO",
        "opts": [
            "Data Understanding",
            "Business Understanding",
            "Data preparation",
            "Modeling",
            "Deployment",
            "Evaluation"
        ],
        "correct": 4
    },
    {
        "q": "__________ is an example for popular graphs for data understanding.\n\nChoices:\n{df.T, df.shape, histogram, 20, 80, Data Cleaning, Logistic Regression, df.head(5), Correlation Matrix, Joblib}",
        "a": "histogram",
        "cat": "BEBO",
        "opts": [
            "df.T",
            "df.shape",
            "histogram",
            "20",
            "80",
            "Data Cleaning",
            "Logistic Regression",
            "df.head(5)",
            "Correlation Matrix",
            "Joblib"
        ],
        "correct": 2
    },
    {
        "q": "If we have dataset named \"df\" so what is the python function for showing the values of the first 5 rows in \"df\"__________.\n\nChoices:\n{df.T, df.shape, histogram, 20, 80, Data Cleaning, Logistic Regression, df.head(5), Correlation Matrix, Joblib}",
        "a": "df.head(5)",
        "cat": "BEBO",
        "opts": [
            "df.T",
            "df.shape",
            "histogram",
            "20",
            "80",
            "Data Cleaning",
            "Logistic Regression",
            "df.head(5)",
            "Correlation Matrix",
            "Joblib"
        ],
        "correct": 7
    },
    {
        "q": "If we have dataset named \"df\" so what is the python function for showing the shape in \"df\"__________.\n\nChoices:\n{df.T, df.shape, histogram, 20, 80, Data Cleaning, Logistic Regression, df.head(5), Correlation Matrix, Joblib}",
        "a": "Df.shape",
        "cat": "BEBO",
        "opts": [
            "df.T",
            "df.shape",
            "histogram",
            "20",
            "80",
            "Data Cleaning",
            "Logistic Regression",
            "df.head(5)",
            "Correlation Matrix",
            "Joblib"
        ],
        "correct": 1
    },
    {
        "q": "__________ is showing illustrate relationships between multiple variables, identifying strong correlations.\n\nChoices:\n{df.T, df.shape, histogram, 20, 80, Data Cleaning, Logistic Regression, df.head(5), Correlation Matrix, Joblib}",
        "a": "Correlation Matrix",
        "cat": "BEBO",
        "opts": [
            "df.T",
            "df.shape",
            "histogram",
            "20",
            "80",
            "Data Cleaning",
            "Logistic Regression",
            "df.head(5)",
            "Correlation Matrix",
            "Joblib"
        ],
        "correct": 8
    },
    {
        "q": "__________ is a code that making the row columns and the columns row in the dataset \"df\".\n\nChoices:\n{df.T, df.shape, histogram, 20, 80, Data Cleaning, Logistic Regression, df.head(5), Correlation Matrix, Joblib}",
        "a": "df.T",
        "cat": "BEBO",
        "opts": [
            "df.T",
            "df.shape",
            "histogram",
            "20",
            "80",
            "Data Cleaning",
            "Logistic Regression",
            "df.head(5)",
            "Correlation Matrix",
            "Joblib"
        ],
        "correct": 0
    },
    {
        "q": "__________ can be considered as Data preparation tasks.\n\nChoices:\n{df.T, df.shape, histogram, 20, 80, Data Cleaning, Logistic Regression, df.head(5), Correlation Matrix, Joblib}",
        "a": "Data Cleaning",
        "cat": "BEBO",
        "opts": [
            "df.T",
            "df.shape",
            "histogram",
            "20",
            "80",
            "Data Cleaning",
            "Logistic Regression",
            "df.head(5)",
            "Correlation Matrix",
            "Joblib"
        ],
        "correct": 5
    },
    {
        "q": "__________ is converting two categorical  variables into numerical format.\n\nChoices:\n{df.T, df.shape, histogram, 20, 80, Data Cleaning, Logistic Regression, df.head(5), Correlation Matrix, Joblib}",
        "a": "Label Encoding",
        "cat": "BEBO",
        "opts": [
            "df.T",
            "df.shape",
            "histogram",
            "20",
            "80",
            "Data Cleaning",
            "Logistic Regression",
            "df.head(5)",
            "Correlation Matrix",
            "Joblib"
        ],
        "correct": -1
    },
    {
        "q": "__________ transforming numerical variables to a scaled range between 0 and 1.\n\nChoices:\n{df.T, df.shape, histogram, 20, 80, Data Cleaning, Logistic Regression, df.head(5), Correlation Matrix, Joblib}",
        "a": "MinMaxScaler",
        "cat": "BEBO",
        "opts": [
            "df.T",
            "df.shape",
            "histogram",
            "20",
            "80",
            "Data Cleaning",
            "Logistic Regression",
            "df.head(5)",
            "Correlation Matrix",
            "Joblib"
        ],
        "correct": -1
    },
    {
        "q": "In train test split we allocate _____% of the data to the training set and _____% to the testing set.\n\nChoices:\n{df.T, df.shape, histogram, 20, 80, Data Cleaning, Logistic Regression, df.head(5), Correlation Matrix, Joblib}",
        "a": "80, 20",
        "cat": "BEBO",
        "opts": [
            "df.T",
            "df.shape",
            "histogram",
            "20",
            "80",
            "Data Cleaning",
            "Logistic Regression",
            "df.head(5)",
            "Correlation Matrix",
            "Joblib"
        ],
        "correct": -1
    },
    {
        "q": "__________ is well suited for binary classification tasks like churn prediction.\n\nChoices:\n{df.T, df.shape, histogram, 20, 80, Data Cleaning, Logistic Regression, df.head(5), Correlation Matrix, Joblib}",
        "a": "Logistic Regression",
        "cat": "BEBO",
        "opts": [
            "df.T",
            "df.shape",
            "histogram",
            "20",
            "80",
            "Data Cleaning",
            "Logistic Regression",
            "df.head(5)",
            "Correlation Matrix",
            "Joblib"
        ],
        "correct": 6
    },
    {
        "q": "__________ (AUC) quantifies the overall performance of the model by measuring the area beneath the ROC curve.\n\nChoices:\n{sklearn, numpy, The Area Under Curve, Boxplot¸ Gradio, Correlation Matrix, Stratified K-Fold Cross-Validation , Confusion Matrix, Joblib, Leave-One-Out Cross-Validation, Accuracy Score }",
        "a": "The Area Under Curve",
        "cat": "BEBO",
        "opts": [
            "sklearn",
            "numpy",
            "The Area Under Curve",
            "Boxplot¸ Gradio",
            "Correlation Matrix",
            "Stratified K-Fold Cross-Validation",
            "Confusion Matrix",
            "Joblib",
            "Leave-One-Out Cross-Validation",
            "Accuracy Score"
        ],
        "correct": 2
    },
    {
        "q": "__________ Is a table illustrating the counts of true positive, true negative, false positive, and false negative predictions.\n\nChoices:\n{sklearn, numpy, The Area Under Curve, Boxplot¸ Gradio, Correlation Matrix, Stratified K-Fold Cross-Validation , Confusion Matrix, Joblib, Leave-One-Out Cross-Validation, Accuracy Score }",
        "a": "Confusion Matrix",
        "cat": "BEBO",
        "opts": [
            "sklearn",
            "numpy",
            "The Area Under Curve",
            "Boxplot¸ Gradio",
            "Correlation Matrix",
            "Stratified K-Fold Cross-Validation",
            "Confusion Matrix",
            "Joblib",
            "Leave-One-Out Cross-Validation",
            "Accuracy Score"
        ],
        "correct": 6
    },
    {
        "q": "__________ is a library that used for numerical operations.\n\nChoices:\n{sklearn, numpy, The Area Under Curve, Boxplot¸ Gradio, Correlation Matrix, Stratified K-Fold Cross-Validation , Confusion Matrix, Joblib, Leave-One-Out Cross-Validation, Accuracy Score }",
        "a": "numpy",
        "cat": "BEBO",
        "opts": [
            "sklearn",
            "numpy",
            "The Area Under Curve",
            "Boxplot¸ Gradio",
            "Correlation Matrix",
            "Stratified K-Fold Cross-Validation",
            "Confusion Matrix",
            "Joblib",
            "Leave-One-Out Cross-Validation",
            "Accuracy Score"
        ],
        "correct": 1
    },
    {
        "q": "__________ is a library that used for saving and loading Python objects, such as models and preprocessing steps.\n\nChoices:\n{sklearn, numpy, The Area Under Curve, Boxplot¸ Gradio, Correlation Matrix, Stratified K-Fold Cross-Validation , Confusion Matrix, Joblib, Leave-One-Out Cross-Validation, Accuracy Score }",
        "a": "Joblib",
        "cat": "BEBO",
        "opts": [
            "sklearn",
            "numpy",
            "The Area Under Curve",
            "Boxplot¸ Gradio",
            "Correlation Matrix",
            "Stratified K-Fold Cross-Validation",
            "Confusion Matrix",
            "Joblib",
            "Leave-One-Out Cross-Validation",
            "Accuracy Score"
        ],
        "correct": 7
    },
    {
        "q": "__________ is a python library that used for creating interface for websites.\n\nChoices:\n{sklearn, numpy, The Area Under Curve, Boxplot¸ Gradio, Correlation Matrix, Stratified K-Fold Cross-Validation , Confusion Matrix, Joblib, Leave-One-Out Cross-Validation, Accuracy Score }",
        "a": "Gradio",
        "cat": "BEBO",
        "opts": [
            "sklearn",
            "numpy",
            "The Area Under Curve",
            "Boxplot¸ Gradio",
            "Correlation Matrix",
            "Stratified K-Fold Cross-Validation",
            "Confusion Matrix",
            "Joblib",
            "Leave-One-Out Cross-Validation",
            "Accuracy Score"
        ],
        "correct": 3
    },
    {
        "q": "__________ is a technique that divide the data into balanced folds\n\nChoices:\n{sklearn, numpy, The Area Under Curve, Boxplot¸ Gradio, Correlation Matrix, Stratified K-Fold Cross-Validation , Confusion Matrix, Joblib, Leave-One-Out Cross-Validation, Accuracy Score }",
        "a": "Stratified K-Fold Cross-Validation",
        "cat": "BEBO",
        "opts": [
            "sklearn",
            "numpy",
            "The Area Under Curve",
            "Boxplot¸ Gradio",
            "Correlation Matrix",
            "Stratified K-Fold Cross-Validation",
            "Confusion Matrix",
            "Joblib",
            "Leave-One-Out Cross-Validation",
            "Accuracy Score"
        ],
        "correct": 5
    },
    {
        "q": "__________ is a technique that divide the data into observations (smallest unite in data)\n\nChoices:\n{sklearn, numpy, The Area Under Curve, Boxplot¸ Gradio, Correlation Matrix, Stratified K-Fold Cross-Validation , Confusion Matrix, Joblib, Leave-One-Out Cross-Validation, Accuracy Score }",
        "a": "Leave-One-Out Cross-Validation",
        "cat": "BEBO",
        "opts": [
            "sklearn",
            "numpy",
            "The Area Under Curve",
            "Boxplot¸ Gradio",
            "Correlation Matrix",
            "Stratified K-Fold Cross-Validation",
            "Confusion Matrix",
            "Joblib",
            "Leave-One-Out Cross-Validation",
            "Accuracy Score"
        ],
        "correct": 8
    },
    {
        "q": "__________ is used for visualizing numerical variables\n\nChoices:\n{sklearn, numpy, The Area Under Curve, Boxplot¸ Gradio, Correlation Matrix, Stratified K-Fold Cross-Validation , Confusion Matrix, Joblib, Leave-One-Out Cross-Validation, Accuracy Score }",
        "a": "Boxplot",
        "cat": "BEBO",
        "opts": [
            "sklearn",
            "numpy",
            "The Area Under Curve",
            "Boxplot¸ Gradio",
            "Correlation Matrix",
            "Stratified K-Fold Cross-Validation",
            "Confusion Matrix",
            "Joblib",
            "Leave-One-Out Cross-Validation",
            "Accuracy Score"
        ],
        "correct": 3
    },
    {
        "q": "__________ This metric quantifies the accuracy of the model by calculating the proportion of correctly classified instances in both training and testing datasets.\n\nChoices:\n{sklearn, numpy, The Area Under Curve, Boxplot¸ Gradio, Correlation Matrix, Stratified K-Fold Cross-Validation , Confusion Matrix, Joblib, Leave-One-Out Cross-Validation, Accuracy Score }",
        "a": "Accuracy Score",
        "cat": "BEBO",
        "opts": [
            "sklearn",
            "numpy",
            "The Area Under Curve",
            "Boxplot¸ Gradio",
            "Correlation Matrix",
            "Stratified K-Fold Cross-Validation",
            "Confusion Matrix",
            "Joblib",
            "Leave-One-Out Cross-Validation",
            "Accuracy Score"
        ],
        "correct": 9
    },
    {
        "q": "__________ Provides various preprocessing techniques such as OneHotEncoder, MinMaxScaler, and Label Encode\n\nChoices:\n{sklearn, numpy, The Area Under Curve, Boxplot¸ Gradio, Correlation Matrix, Stratified K-Fold Cross-Validation , Confusion Matrix, Joblib, Leave-One-Out Cross-Validation, Accuracy Score }",
        "a": "sklearn",
        "cat": "BEBO",
        "opts": [
            "sklearn",
            "numpy",
            "The Area Under Curve",
            "Boxplot¸ Gradio",
            "Correlation Matrix",
            "Stratified K-Fold Cross-Validation",
            "Confusion Matrix",
            "Joblib",
            "Leave-One-Out Cross-Validation",
            "Accuracy Score"
        ],
        "correct": 0
    },
    {
        "q": "Function \"fillna( )\" returning \"false\" if we have null values?\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "One hot encoding is converting two categorical variables into numerical format.\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "Local sharing means Uploading the project files to hugging face website.\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "When we are creating new space we choose streamlit as SDK.\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "The heatmap is indeed a powerful tool for visualizing relationships within data, offering an intuitive and colorful representation.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Cross Validation has four types\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "In K-Fold cross validation we divide the data into equal folds.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Joblib is used for data manipulation and analysis.\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "numpy Provides various preprocessing techniques such as OneHotEncoder, MinMaxScaler, and LabelEncoder.\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "Windows 10 Home edition is suitable for basic AI projects but has limited GPU support.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Linux distributions are generally free to use and modify.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Windows 7 is the most suitable version for complex AI tasks due to its modern features.\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "Linux offers a variety of distributions that can cater to different hardware capabilities.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "The GPU is essential for basic AI projects on Windows\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "Windows 8.1 was primarily designed with touch-friendly features.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Open-source software is generally more customizable than commercial software.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Linux distributions always require high-end hardware to run efficiently.\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "The Professional edition of Windows 10 provides better GPU support for AI tasks than the Home edition.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Windows 10 Pro includes BitLocker encryption for enhanced data security.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Windows 7 Home Basic offers advanced features like joining domains\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "Linux distributions such as Ubuntu and Linux Mint are considered beginner-friendly.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "The Education edition of Windows 10 has more features tailored to businesses than schools.\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "Open-source licenses like the MIT license allow users to modify and redistribute software.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "An SSD is recommended over an HDD for faster loading and performance in AI projects.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Windows 11 requires more RAM and better CPU performance compared to Windows 7.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Most modern AI software can run on Windows 7 without any compatibility issues.\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "The Ultimate edition of Windows 7 includes all features of the Professional edition and more, such as BitLocker.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Windows 10 Pro provides the same level of security and management features as Windows 10 Home.\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "Most Linux distributions can be downloaded and installed at no cost, making them an economical choice for AI development.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Windows licenses can sometimes be transferred to another computer if it’s a retail version.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Puppy Linux is designed to be lightweight and is ideal for low-spec computers.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "A retail Windows license allows the license to be transferred to another computer.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "It is not necessary to check for software compatibility before installing an application.\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "Creating a backup before OS installation is optional but highly recommended.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "The compatibility check for Linux distributions can be performed using a tool called Distrochooser.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "During OS installation, choosing the \"Custom\" type allows users to modify partitions.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "An operating system’s user guide often provides troubleshooting tips for common issues.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Data transfer between devices can be done via both cloud and portable storage options.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "The installation process for Windows and Linux never requires internet access.\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "Which Windows version is best for AI development with full GPU support? A) Windows 7 B) Windows 10 Home C) Windows 10 Pro D) Windows 11 Enterprise",
        "a": "C",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "What is a key advantage of using Linux for AI development? A) High cost B) Limited distribution options C) Open-source nature D) Complex licensing fees",
        "a": "C",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Which Linux distribution is best for low-spec machines? A) Kubuntu B) Puppy Linux C) Pop!_OS D) Fedora",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Which Windows edition provides features for joining domains and encryption? A) Home Basic B) Home Premium C) Professional D) Ultimate",
        "a": "C",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "What is one of the main benefits of using a Linux distribution for AI projects? A) Limited software options B) High cost of installation C) Greater control over system customization D) Less community support",
        "a": "C",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Which edition of Windows is typically pre-installed by manufacturers and tied to the specific computer? A) Retail License B) OEM License C) Education License D) Open License",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "What is a common feature of open-source software? A) It is expensive and proprietary. B) It allows user modification and redistribution. C) It can only be used in educational settings. D) It does not require any license.",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Which Linux distribution is known for balancing performance and ease of use? A) Puppy Linux B) Ubuntu C) Gentoo D) Arch Linux",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Which edition of Windows 7 is targeted toward business users? A) Home Basic B) Home Premium C) Professional D) Ultimate",
        "a": "C",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "What is the common advantage of using open-source Linux for AI projects? A) Limited community support B) High license fees C) Customizability and transparency D) Complicated licensing terms",
        "a": "C",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "The minimum RAM recommended for complex AI projects is _______ GB.\n( 4, 8, 16, 32)",
        "a": "16",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "To run most AI tools like TensorFlow, the ideal type of GPU is from the _______ series.\n( NVIDIA GeForce GTX, Intel UHD, AMD Radeon, NVIDIA Quadro)",
        "a": "NVIDIA GeForce GTX",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "_______ is an example of a Linux distribution designed for lightweight, low-resource environments.\n( Ubuntu, Kubuntu, Puppy Linux, Fedora)",
        "a": "Puppy Linux",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "The main benefit of using Linux over Windows for AI development is its _______ nature.\n( costly, restrictive, open-source, closed-source)",
        "a": "open-source",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Before installing any operating system, it is important to perform a _______ check for hardware compatibility.\n( license, compatibility, update, network)",
        "a": "compatibility",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Before upgrading an OS, it is recommended to perform a _______ to prevent data loss.\n(compatibility check, driver update, backup, software installation)",
        "a": "backup",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Windows Pro editions often include advanced features like _______ for remote access.\n( Remote Desktop, Sticky Notes, Internet Explorer, Cortana)",
        "a": "Remote Desktop",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "The _______ distribution is ideal for users with minimal technical experience but wanting a Linux OS for AI projects.\n( Ubuntu, Arch Linux, Puppy Linux, Kali Linux)",
        "a": "Ubuntu",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "_______ is a type of license that allows users to use software only on the original computer it was installed on.\n( OEM, Retail, Trial, Open-Source)",
        "a": "OEM",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "_______ is a Windows tool that helps check system compatibility for upgrading to a new version.\n(Windows Update Assistant, Device Manager, File Explorer, Task Scheduler)",
        "a": "Windows Update Assistant",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Windows 7\n\nChoices:\nA) Basic edition suitable for everyday tasks\nB) Sleek design, focused on multitasking\nC) Beginner-friendly, with good community support\nD) Outdated, limited GPU support\nE) Excellent for gaming\nF) Strong mid-level performance distribution",
        "a": "D) Outdated, limited GPU support",
        "cat": "BEBO",
        "opts": [
            "Basic edition suitable for everyday tasks",
            "Sleek design, focused on multitasking",
            "Beginner-friendly, with good community support",
            "Outdated, limited GPU support",
            "Excellent for gaming",
            "Strong mid-level performance distribution"
        ],
        "correct": 3
    },
    {
        "q": "Windows 10 Home\n\nChoices:\nA) Basic edition suitable for everyday tasks\nB) Sleek design, focused on multitasking\nC) Beginner-friendly, with good community support\nD) Outdated, limited GPU support\nE) Excellent for gaming\nF) Strong mid-level performance distribution",
        "a": "A) Basic edition suitable for everyday tasks",
        "cat": "BEBO",
        "opts": [
            "Basic edition suitable for everyday tasks",
            "Sleek design, focused on multitasking",
            "Beginner-friendly, with good community support",
            "Outdated, limited GPU support",
            "Excellent for gaming",
            "Strong mid-level performance distribution"
        ],
        "correct": 0
    },
    {
        "q": "Windows 11\n\nChoices:\nA) Basic edition suitable for everyday tasks\nB) Sleek design, focused on multitasking\nC) Beginner-friendly, with good community support\nD) Outdated, limited GPU support\nE) Excellent for gaming\nF) Strong mid-level performance distribution",
        "a": "B) Sleek design, focused on multitasking",
        "cat": "BEBO",
        "opts": [
            "Basic edition suitable for everyday tasks",
            "Sleek design, focused on multitasking",
            "Beginner-friendly, with good community support",
            "Outdated, limited GPU support",
            "Excellent for gaming",
            "Strong mid-level performance distribution"
        ],
        "correct": 1
    },
    {
        "q": "Ubuntu\n\nChoices:\nA) Basic edition suitable for everyday tasks\nB) Sleek design, focused on multitasking\nC) Beginner-friendly, with good community support\nD) Outdated, limited GPU support\nE) Excellent for gaming\nF) Strong mid-level performance distribution",
        "a": "C) Beginner-friendly, with good community support",
        "cat": "BEBO",
        "opts": [
            "Basic edition suitable for everyday tasks",
            "Sleek design, focused on multitasking",
            "Beginner-friendly, with good community support",
            "Outdated, limited GPU support",
            "Excellent for gaming",
            "Strong mid-level performance distribution"
        ],
        "correct": 2
    },
    {
        "q": "5- Linux Mint\n\nChoices:\nA) Basic edition suitable for everyday tasks\nB) Sleek design, focused on multitasking\nC) Beginner-friendly, with good community support\nD) Outdated, limited GPU support\nE) Excellent for gaming\nF) Strong mid-level performance distribution",
        "a": "F) Strong mid-level performance distribution",
        "cat": "BEBO",
        "opts": [
            "Basic edition suitable for everyday tasks",
            "Sleek design, focused on multitasking",
            "Beginner-friendly, with good community support",
            "Outdated, limited GPU support",
            "Excellent for gaming",
            "Strong mid-level performance distribution"
        ],
        "correct": 5
    },
    {
        "q": "Windows 10 Pro\n\nChoices:\nA) Basic but supports multitasking\nB) User-friendly, strong community support\nC) Full GPU support, recommended for AI\nD) Offers advanced features including BitLocker\nE) Noted for its Start Screen design\nF) Mid-level distribution for general use",
        "a": "C) Full GPU support, recommended for AI",
        "cat": "BEBO",
        "opts": [
            "Basic but supports multitasking",
            "User-friendly, strong community support",
            "Full GPU support, recommended for AI",
            "Offers advanced features including BitLocker",
            "Noted for its Start Screen design",
            "Mid-level distribution for general use"
        ],
        "correct": 2
    },
    {
        "q": "Windows 8.1\n\nChoices:\nA) Basic but supports multitasking\nB) User-friendly, strong community support\nC) Full GPU support, recommended for AI\nD) Offers advanced features including BitLocker\nE) Noted for its Start Screen design\nF) Mid-level distribution for general use",
        "a": "E) Noted for its Start Screen design",
        "cat": "BEBO",
        "opts": [
            "Basic but supports multitasking",
            "User-friendly, strong community support",
            "Full GPU support, recommended for AI",
            "Offers advanced features including BitLocker",
            "Noted for its Start Screen design",
            "Mid-level distribution for general use"
        ],
        "correct": 4
    },
    {
        "q": "Ubuntu\n\nChoices:\nA) Basic but supports multitasking\nB) User-friendly, strong community support\nC) Full GPU support, recommended for AI\nD) Offers advanced features including BitLocker\nE) Noted for its Start Screen design\nF) Mid-level distribution for general use",
        "a": "B) User-friendly, strong community support",
        "cat": "BEBO",
        "opts": [
            "Basic but supports multitasking",
            "User-friendly, strong community support",
            "Full GPU support, recommended for AI",
            "Offers advanced features including BitLocker",
            "Noted for its Start Screen design",
            "Mid-level distribution for general use"
        ],
        "correct": 1
    },
    {
        "q": "Windows 7 Ultimate\n\nChoices:\nA) Basic but supports multitasking\nB) User-friendly, strong community support\nC) Full GPU support, recommended for AI\nD) Offers advanced features including BitLocker\nE) Noted for its Start Screen design\nF) Mid-level distribution for general use",
        "a": "D) Offers advanced features including BitLocker",
        "cat": "BEBO",
        "opts": [
            "Basic but supports multitasking",
            "User-friendly, strong community support",
            "Full GPU support, recommended for AI",
            "Offers advanced features including BitLocker",
            "Noted for its Start Screen design",
            "Mid-level distribution for general use"
        ],
        "correct": 3
    },
    {
        "q": "Linux Mint\n\nChoices:\nA) Basic but supports multitasking\nB) User-friendly, strong community support\nC) Full GPU support, recommended for AI\nD) Offers advanced features including BitLocker\nE) Noted for its Start Screen design\nF) Mid-level distribution for general use",
        "a": "F) Mid-level distribution for general use",
        "cat": "BEBO",
        "opts": [
            "Basic but supports multitasking",
            "User-friendly, strong community support",
            "Full GPU support, recommended for AI",
            "Offers advanced features including BitLocker",
            "Noted for its Start Screen design",
            "Mid-level distribution for general use"
        ],
        "correct": 5
    },
    {
        "q": "Check for Sufficient Disk Space\n\nChoices:\nA) Ensures that the current system meets the minimum technical requirements.\nB) Confirms there is enough space for installing the operating system and applications.\nC) Protects data in case of installation failure.\nD) Decides between upgrade, custom, or basic setup.\nE) Install software directly without any preparation.\nF) Ensure the program or application can run on the selected OS.",
        "a": "B) Confirms there is enough space for installing the operating system and applications.",
        "cat": "BEBO",
        "opts": [
            "Ensures that the current system meets the minimum technical requirements.",
            "Confirms there is enough space for installing the operating system and applications.",
            "Protects data in case of installation failure.",
            "Decides between upgrade, custom, or basic setup.",
            "Install software directly without any preparation.",
            "Ensure the program or application can run on the selected OS."
        ],
        "correct": 1
    },
    {
        "q": "Verify Hardware Compatibility\n\nChoices:\nA) Ensures that the current system meets the minimum technical requirements.\nB) Confirms there is enough space for installing the operating system and applications.\nC) Protects data in case of installation failure.\nD) Decides between upgrade, custom, or basic setup.\nE) Install software directly without any preparation.\nF) Ensure the program or application can run on the selected OS.",
        "a": "A) Ensures that the current system meets the minimum technical requirements.",
        "cat": "BEBO",
        "opts": [
            "Ensures that the current system meets the minimum technical requirements.",
            "Confirms there is enough space for installing the operating system and applications.",
            "Protects data in case of installation failure.",
            "Decides between upgrade, custom, or basic setup.",
            "Install software directly without any preparation.",
            "Ensure the program or application can run on the selected OS."
        ],
        "correct": 0
    },
    {
        "q": "3- Choose Installation Type\n\nChoices:\nA) Ensures that the current system meets the minimum technical requirements.\nB) Confirms there is enough space for installing the operating system and applications.\nC) Protects data in case of installation failure.\nD) Decides between upgrade, custom, or basic setup.\nE) Install software directly without any preparation.\nF) Ensure the program or application can run on the selected OS.",
        "a": "D) Decides between upgrade, custom, or basic setup.",
        "cat": "BEBO",
        "opts": [
            "Ensures that the current system meets the minimum technical requirements.",
            "Confirms there is enough space for installing the operating system and applications.",
            "Protects data in case of installation failure.",
            "Decides between upgrade, custom, or basic setup.",
            "Install software directly without any preparation.",
            "Ensure the program or application can run on the selected OS."
        ],
        "correct": 3
    },
    {
        "q": "4- Create a Backup\n\nChoices:\nA) Ensures that the current system meets the minimum technical requirements.\nB) Confirms there is enough space for installing the operating system and applications.\nC) Protects data in case of installation failure.\nD) Decides between upgrade, custom, or basic setup.\nE) Install software directly without any preparation.\nF) Ensure the program or application can run on the selected OS.",
        "a": "C) Protects data in case of installation failure.",
        "cat": "BEBO",
        "opts": [
            "Ensures that the current system meets the minimum technical requirements.",
            "Confirms there is enough space for installing the operating system and applications.",
            "Protects data in case of installation failure.",
            "Decides between upgrade, custom, or basic setup.",
            "Install software directly without any preparation.",
            "Ensure the program or application can run on the selected OS."
        ],
        "correct": 2
    },
    {
        "q": "5- 8Verify Software Requirements\n\nChoices:\nA) Ensures that the current system meets the minimum technical requirements.\nB) Confirms there is enough space for installing the operating system and applications.\nC) Protects data in case of installation failure.\nD) Decides between upgrade, custom, or basic setup.\nE) Install software directly without any preparation.\nF) Ensure the program or application can run on the selected OS.",
        "a": "F) Ensure the program or application can run on the selected OS.",
        "cat": "BEBO",
        "opts": [
            "Ensures that the current system meets the minimum technical requirements.",
            "Confirms there is enough space for installing the operating system and applications.",
            "Protects data in case of installation failure.",
            "Decides between upgrade, custom, or basic setup.",
            "Install software directly without any preparation.",
            "Ensure the program or application can run on the selected OS."
        ],
        "correct": 5
    },
    {
        "q": "Select Backup Destination\n\nChoices:\nA) Ensures data has been copied without corruption.\nB) Use portable storage for moving files.\nC) Choose between cloud services and physical storage.\nD) Copies files directly to an online backup service.\nE) Moves data without verifying .\nF) Set up meetings to align with client schedules.",
        "a": "C) Choose between cloud services and physical storage.",
        "cat": "BEBO",
        "opts": [
            "Ensures data has been copied without corruption.",
            "Use portable storage for moving files.",
            "Choose between cloud services and physical storage.",
            "Copies files directly to an online backup service.",
            "Moves data without verifying .",
            "Set up meetings to align with client schedules."
        ],
        "correct": 2
    },
    {
        "q": "\n\nChoices:\nA) Ensures data has been copied without corruption.\nB) Use portable storage for moving files.\nC) Choose between cloud services and physical storage.\nD) Copies files directly to an online backup service.\nE) Moves data without verifying .\nF) Set up meetings to align with client schedules.",
        "a": "D) Copies files directly to an online backup service.",
        "cat": "BEBO",
        "opts": [
            "Ensures data has been copied without corruption.",
            "Use portable storage for moving files.",
            "Choose between cloud services and physical storage.",
            "Copies files directly to an online backup service.",
            "Moves data without verifying .",
            "Set up meetings to align with client schedules."
        ],
        "correct": 3
    },
    {
        "q": "Upload Data to Cloud\n\nChoices:\nA) Ensures data has been copied without corruption.\nB) Use portable storage for moving files.\nC) Choose between cloud services and physical storage.\nD) Copies files directly to an online backup service.\nE) Moves data without verifying .\nF) Set up meetings to align with client schedules.",
        "a": "A) Ensures data has been copied without corruption.",
        "cat": "BEBO",
        "opts": [
            "Ensures data has been copied without corruption.",
            "Use portable storage for moving files.",
            "Choose between cloud services and physical storage.",
            "Copies files directly to an online backup service.",
            "Moves data without verifying .",
            "Set up meetings to align with client schedules."
        ],
        "correct": 0
    },
    {
        "q": "Check Data Integrity\n\nChoices:\nA) Ensures data has been copied without corruption.\nB) Use portable storage for moving files.\nC) Choose between cloud services and physical storage.\nD) Copies files directly to an online backup service.\nE) Moves data without verifying .\nF) Set up meetings to align with client schedules.",
        "a": "B) Use portable storage for moving files.",
        "cat": "BEBO",
        "opts": [
            "Ensures data has been copied without corruption.",
            "Use portable storage for moving files.",
            "Choose between cloud services and physical storage.",
            "Copies files directly to an online backup service.",
            "Moves data without verifying .",
            "Set up meetings to align with client schedules."
        ],
        "correct": 1
    },
    {
        "q": "Transfer Data to External Drive\n\nChoices:\nA) Ensures data has been copied without corruption.\nB) Use portable storage for moving files.\nC) Choose between cloud services and physical storage.\nD) Copies files directly to an online backup service.\nE) Moves data without verifying .\nF) Set up meetings to align with client schedules.",
        "a": "F) Set up meetings to align with client schedules.",
        "cat": "BEBO",
        "opts": [
            "Ensures data has been copied without corruption.",
            "Use portable storage for moving files.",
            "Choose between cloud services and physical storage.",
            "Copies files directly to an online backup service.",
            "Moves data without verifying .",
            "Set up meetings to align with client schedules."
        ],
        "correct": 5
    },
    {
        "q": "1-Backup Planning\n\nChoices:\nA) Allows for use on multiple machines with transfer rights\nB) A key step to ensure data safety before installing an OS\nC) Verifies if the computer's components support the intended OS\nD) Software whose source code can be modified and shared\nE) Preparing devices and checking resources before installation\nF) Guarantees software is always proprietary .",
        "a": "B) A key step to ensure data safety before installing an OS",
        "cat": "BEBO",
        "opts": [
            "Allows for use on multiple machines with transfer rights",
            "A key step to ensure data safety before installing an OS",
            "Verifies if the computer's components support the intended OS",
            "Software whose source code can be modified and shared",
            "Preparing devices and checking resources before installation",
            "Guarantees software is always proprietary ."
        ],
        "correct": 1
    },
    {
        "q": "2-Retail License\n\nChoices:\nA) Allows for use on multiple machines with transfer rights\nB) A key step to ensure data safety before installing an OS\nC) Verifies if the computer's components support the intended OS\nD) Software whose source code can be modified and shared\nE) Preparing devices and checking resources before installation\nF) Guarantees software is always proprietary .",
        "a": "A) Allows for use on multiple machines with transfer rights",
        "cat": "BEBO",
        "opts": [
            "Allows for use on multiple machines with transfer rights",
            "A key step to ensure data safety before installing an OS",
            "Verifies if the computer's components support the intended OS",
            "Software whose source code can be modified and shared",
            "Preparing devices and checking resources before installation",
            "Guarantees software is always proprietary ."
        ],
        "correct": 0
    },
    {
        "q": "3-Hardware Compatibility\n\nChoices:\nA) Allows for use on multiple machines with transfer rights\nB) A key step to ensure data safety before installing an OS\nC) Verifies if the computer's components support the intended OS\nD) Software whose source code can be modified and shared\nE) Preparing devices and checking resources before installation\nF) Guarantees software is always proprietary .",
        "a": "C) Verifies if the computer's components support the intended OS",
        "cat": "BEBO",
        "opts": [
            "Allows for use on multiple machines with transfer rights",
            "A key step to ensure data safety before installing an OS",
            "Verifies if the computer's components support the intended OS",
            "Software whose source code can be modified and shared",
            "Preparing devices and checking resources before installation",
            "Guarantees software is always proprietary ."
        ],
        "correct": 2
    },
    {
        "q": "4-Pre-Installation Planning\n\nChoices:\nA) Allows for use on multiple machines with transfer rights\nB) A key step to ensure data safety before installing an OS\nC) Verifies if the computer's components support the intended OS\nD) Software whose source code can be modified and shared\nE) Preparing devices and checking resources before installation\nF) Guarantees software is always proprietary .",
        "a": "E) Preparing devices and checking resources before installation",
        "cat": "BEBO",
        "opts": [
            "Allows for use on multiple machines with transfer rights",
            "A key step to ensure data safety before installing an OS",
            "Verifies if the computer's components support the intended OS",
            "Software whose source code can be modified and shared",
            "Preparing devices and checking resources before installation",
            "Guarantees software is always proprietary ."
        ],
        "correct": 4
    },
    {
        "q": "5-Open-Source Software\n\nChoices:\nA) Allows for use on multiple machines with transfer rights\nB) A key step to ensure data safety before installing an OS\nC) Verifies if the computer's components support the intended OS\nD) Software whose source code can be modified and shared\nE) Preparing devices and checking resources before installation\nF) Guarantees software is always proprietary .",
        "a": "D) Software whose source code can be modified and shared",
        "cat": "BEBO",
        "opts": [
            "Allows for use on multiple machines with transfer rights",
            "A key step to ensure data safety before installing an OS",
            "Verifies if the computer's components support the intended OS",
            "Software whose source code can be modified and shared",
            "Preparing devices and checking resources before installation",
            "Guarantees software is always proprietary ."
        ],
        "correct": 3
    },
    {
        "q": "Licensing Fees\n\nChoices:\nA) Important for faster read and write speeds compared to HDDs\nB) Addresses potential problems during installation and setup\nC) Costs associated with using a specific version of an OS\nD) Ensures that the chosen software runs smoothly on a system\nE) Organizing tasks and setting deadlines for installations\nF) Free and open for any user .",
        "a": "C) Costs associated with using a specific version of an OS",
        "cat": "BEBO",
        "opts": [
            "Important for faster read and write speeds compared to HDDs",
            "Addresses potential problems during installation and setup",
            "Costs associated with using a specific version of an OS",
            "Ensures that the chosen software runs smoothly on a system",
            "Organizing tasks and setting deadlines for installations",
            "Free and open for any user ."
        ],
        "correct": 2
    },
    {
        "q": "AI Software Compatibility\n\nChoices:\nA) Important for faster read and write speeds compared to HDDs\nB) Addresses potential problems during installation and setup\nC) Costs associated with using a specific version of an OS\nD) Ensures that the chosen software runs smoothly on a system\nE) Organizing tasks and setting deadlines for installations\nF) Free and open for any user .",
        "a": "D) Ensures that the chosen software runs smoothly on a system",
        "cat": "BEBO",
        "opts": [
            "Important for faster read and write speeds compared to HDDs",
            "Addresses potential problems during installation and setup",
            "Costs associated with using a specific version of an OS",
            "Ensures that the chosen software runs smoothly on a system",
            "Organizing tasks and setting deadlines for installations",
            "Free and open for any user ."
        ],
        "correct": 3
    },
    {
        "q": "3-SSD Storage\n\nChoices:\nA) Important for faster read and write speeds compared to HDDs\nB) Addresses potential problems during installation and setup\nC) Costs associated with using a specific version of an OS\nD) Ensures that the chosen software runs smoothly on a system\nE) Organizing tasks and setting deadlines for installations\nF) Free and open for any user .",
        "a": "A) Important for faster read and write speeds compared to HDDs",
        "cat": "BEBO",
        "opts": [
            "Important for faster read and write speeds compared to HDDs",
            "Addresses potential problems during installation and setup",
            "Costs associated with using a specific version of an OS",
            "Ensures that the chosen software runs smoothly on a system",
            "Organizing tasks and setting deadlines for installations",
            "Free and open for any user ."
        ],
        "correct": 0
    },
    {
        "q": "4-Project Planning\n\nChoices:\nA) Important for faster read and write speeds compared to HDDs\nB) Addresses potential problems during installation and setup\nC) Costs associated with using a specific version of an OS\nD) Ensures that the chosen software runs smoothly on a system\nE) Organizing tasks and setting deadlines for installations\nF) Free and open for any user .",
        "a": "E) Organizing tasks and setting deadlines for installations",
        "cat": "BEBO",
        "opts": [
            "Important for faster read and write speeds compared to HDDs",
            "Addresses potential problems during installation and setup",
            "Costs associated with using a specific version of an OS",
            "Ensures that the chosen software runs smoothly on a system",
            "Organizing tasks and setting deadlines for installations",
            "Free and open for any user ."
        ],
        "correct": 4
    },
    {
        "q": "5-Troubleshooting OS Issues\n\nChoices:\nA) Important for faster read and write speeds compared to HDDs\nB) Addresses potential problems during installation and setup\nC) Costs associated with using a specific version of an OS\nD) Ensures that the chosen software runs smoothly on a system\nE) Organizing tasks and setting deadlines for installations\nF) Free and open for any user .",
        "a": "B) Addresses potential problems during installation and setup",
        "cat": "BEBO",
        "opts": [
            "Important for faster read and write speeds compared to HDDs",
            "Addresses potential problems during installation and setup",
            "Costs associated with using a specific version of an OS",
            "Ensures that the chosen software runs smoothly on a system",
            "Organizing tasks and setting deadlines for installations",
            "Free and open for any user ."
        ],
        "correct": 1
    },
    {
        "q": "1-Insufficient Disk Space\n\nChoices:\nA) Check available storage and free up space if needed.\nB) Verify that all drivers are updated before installation.\nC) Ensure an active internet connection is stable.\nD) Activation keys are incorrect or missing.\nE) Use older installation files to avoid errors .\nF) Check the type of storage (HDD or SSD) used.",
        "a": "A) Check available storage and free up space if needed.",
        "cat": "BEBO",
        "opts": [
            "Check available storage and free up space if needed.",
            "Verify that all drivers are updated before installation.",
            "Ensure an active internet connection is stable.",
            "Activation keys are incorrect or missing.",
            "Use older installation files to avoid errors .",
            "Check the type of storage (HDD or SSD) used."
        ],
        "correct": 0
    },
    {
        "q": "2-Network Connectivity Problems\n\nChoices:\nA) Check available storage and free up space if needed.\nB) Verify that all drivers are updated before installation.\nC) Ensure an active internet connection is stable.\nD) Activation keys are incorrect or missing.\nE) Use older installation files to avoid errors .\nF) Check the type of storage (HDD or SSD) used.",
        "a": "C) Ensure an active internet connection is stable.",
        "cat": "BEBO",
        "opts": [
            "Check available storage and free up space if needed.",
            "Verify that all drivers are updated before installation.",
            "Ensure an active internet connection is stable.",
            "Activation keys are incorrect or missing.",
            "Use older installation files to avoid errors .",
            "Check the type of storage (HDD or SSD) used."
        ],
        "correct": 2
    },
    {
        "q": "3-Driver Incompatibility\n\nChoices:\nA) Check available storage and free up space if needed.\nB) Verify that all drivers are updated before installation.\nC) Ensure an active internet connection is stable.\nD) Activation keys are incorrect or missing.\nE) Use older installation files to avoid errors .\nF) Check the type of storage (HDD or SSD) used.",
        "a": "B) Verify that all drivers are updated before installation.",
        "cat": "BEBO",
        "opts": [
            "Check available storage and free up space if needed.",
            "Verify that all drivers are updated before installation.",
            "Ensure an active internet connection is stable.",
            "Activation keys are incorrect or missing.",
            "Use older installation files to avoid errors .",
            "Check the type of storage (HDD or SSD) used."
        ],
        "correct": 1
    },
    {
        "q": "4-Licensing Errors\n\nChoices:\nA) Check available storage and free up space if needed.\nB) Verify that all drivers are updated before installation.\nC) Ensure an active internet connection is stable.\nD) Activation keys are incorrect or missing.\nE) Use older installation files to avoid errors .\nF) Check the type of storage (HDD or SSD) used.",
        "a": "D) Activation keys are incorrect or missing.",
        "cat": "BEBO",
        "opts": [
            "Check available storage and free up space if needed.",
            "Verify that all drivers are updated before installation.",
            "Ensure an active internet connection is stable.",
            "Activation keys are incorrect or missing.",
            "Use older installation files to avoid errors .",
            "Check the type of storage (HDD or SSD) used."
        ],
        "correct": 3
    },
    {
        "q": "5-Slow Installation Speed\n\nChoices:\nA) Check available storage and free up space if needed.\nB) Verify that all drivers are updated before installation.\nC) Ensure an active internet connection is stable.\nD) Activation keys are incorrect or missing.\nE) Use older installation files to avoid errors .\nF) Check the type of storage (HDD or SSD) used.",
        "a": "F) Check the type of storage (HDD or SSD) used.",
        "cat": "BEBO",
        "opts": [
            "Check available storage and free up space if needed.",
            "Verify that all drivers are updated before installation.",
            "Ensure an active internet connection is stable.",
            "Activation keys are incorrect or missing.",
            "Use older installation files to avoid errors .",
            "Check the type of storage (HDD or SSD) used."
        ],
        "correct": 5
    },
    {
        "q": "1-Verify RAM Capacity\n\nChoices:\nA) Helps the system boot from the correct installation media.\nB) Verifies that the computer can handle the OS requirements.\nC) Determines if the CPU meets the minimum GHz required.\nD) Confirms whether storage is SSD or HDD for performance.\nE) Starts the installation process without issues (Incorrect).\nF) Ensures all critical data is safely stored.",
        "a": "B) Verifies that the computer can handle the OS requirements.",
        "cat": "BEBO",
        "opts": [
            "Helps the system boot from the correct installation media.",
            "Verifies that the computer can handle the OS requirements.",
            "Determines if the CPU meets the minimum GHz required.",
            "Confirms whether storage is SSD or HDD for performance.",
            "Starts the installation process without issues (Incorrect).",
            "Ensures all critical data is safely stored."
        ],
        "correct": 1
    },
    {
        "q": "2-Check Processor Speed\n\nChoices:\nA) Helps the system boot from the correct installation media.\nB) Verifies that the computer can handle the OS requirements.\nC) Determines if the CPU meets the minimum GHz required.\nD) Confirms whether storage is SSD or HDD for performance.\nE) Starts the installation process without issues (Incorrect).\nF) Ensures all critical data is safely stored.",
        "a": "C) Determines if the CPU meets the minimum GHz required.",
        "cat": "BEBO",
        "opts": [
            "Helps the system boot from the correct installation media.",
            "Verifies that the computer can handle the OS requirements.",
            "Determines if the CPU meets the minimum GHz required.",
            "Confirms whether storage is SSD or HDD for performance.",
            "Starts the installation process without issues (Incorrect).",
            "Ensures all critical data is safely stored."
        ],
        "correct": 2
    },
    {
        "q": "3-Confirm Storage Type\n\nChoices:\nA) Helps the system boot from the correct installation media.\nB) Verifies that the computer can handle the OS requirements.\nC) Determines if the CPU meets the minimum GHz required.\nD) Confirms whether storage is SSD or HDD for performance.\nE) Starts the installation process without issues (Incorrect).\nF) Ensures all critical data is safely stored.",
        "a": "D) Confirms whether storage is SSD or HDD for performance.",
        "cat": "BEBO",
        "opts": [
            "Helps the system boot from the correct installation media.",
            "Verifies that the computer can handle the OS requirements.",
            "Determines if the CPU meets the minimum GHz required.",
            "Confirms whether storage is SSD or HDD for performance.",
            "Starts the installation process without issues (Incorrect).",
            "Ensures all critical data is safely stored."
        ],
        "correct": 3
    },
    {
        "q": "4-Review Backup Plan\n\nChoices:\nA) Helps the system boot from the correct installation media.\nB) Verifies that the computer can handle the OS requirements.\nC) Determines if the CPU meets the minimum GHz required.\nD) Confirms whether storage is SSD or HDD for performance.\nE) Starts the installation process without issues (Incorrect).\nF) Ensures all critical data is safely stored.",
        "a": "F) Ensures all critical data is safely stored.",
        "cat": "BEBO",
        "opts": [
            "Helps the system boot from the correct installation media.",
            "Verifies that the computer can handle the OS requirements.",
            "Determines if the CPU meets the minimum GHz required.",
            "Confirms whether storage is SSD or HDD for performance.",
            "Starts the installation process without issues (Incorrect).",
            "Ensures all critical data is safely stored."
        ],
        "correct": 5
    },
    {
        "q": "5-Ensure BIOS Settings\n\nChoices:\nA) Helps the system boot from the correct installation media.\nB) Verifies that the computer can handle the OS requirements.\nC) Determines if the CPU meets the minimum GHz required.\nD) Confirms whether storage is SSD or HDD for performance.\nE) Starts the installation process without issues (Incorrect).\nF) Ensures all critical data is safely stored.",
        "a": "A) Helps the system boot from the correct installation media.",
        "cat": "BEBO",
        "opts": [
            "Helps the system boot from the correct installation media.",
            "Verifies that the computer can handle the OS requirements.",
            "Determines if the CPU meets the minimum GHz required.",
            "Confirms whether storage is SSD or HDD for performance.",
            "Starts the installation process without issues (Incorrect).",
            "Ensures all critical data is safely stored."
        ],
        "correct": 0
    },
    {
        "q": "Maintenance prevents system failures and ensures the ongoing reliability of the model.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "maintenance helps prevent breakdowns and ensures smooth operation\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "tools and technologies aren’t essential for conducting maintenance.\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "Timely updates avoid system instability and  improve overall performance.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Machine learning drift occurs when the performance of a model degrades over time.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Drift can lead to accurate predictions, increased model performance, and reliable results\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "Detecting and resolving drift ensures that models remain reliable and aligned with real-world data.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Data distribution can shift due to new data patterns only.\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "Changes in the Relationship Between Features and Target leading to model drift\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Changes in the Business Context can lead to model drift\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Data quality issues like missing values, noise, or outliers can affect model performance (drift model)\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Concept drift occurs when the statistical properties of the target variable change, leading to model drift\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Missing data negatively affects a model's ability to learn effectively and can lead to poor results.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Differences in feature scales can negatively impact a model's performance.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Underfitting occurs when a model is too simple to capture the underlying patterns in the data.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Underfitting leading to high performance on both training and validation datasets\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "Overfitting occurs when the model becomes too complex, capturing noise in the data instead of true patterns.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Overfitting leading to good performance on the training data but poor generalization on new data.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "To solve Underfitting use a more complex model, increase the number of training iterations, or decrease regularization.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "These are effective strategies for solving overfitting like using simpler models, add regularization, use cross-validation.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "high model performance in the face of data drift can mislead decision-making.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Regularly monitoring key performance metrics over time helps detect when drift occurs.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Effective management of the ML life cycle ensures that issues like drift are addressed\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Unit Testing Involves testing individual components before integration.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "in unit testing, individual components or functions are tested in isolation to ensure they work correctly.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "The goal of  integration testing is to identify issues that may arise when the individual modules interact with each other.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Integration Testing Involves testing individual component before integration.\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "Drift in machine learning models always improves predictions.\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "Outliers can decrease the performance of a machine learning model.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Missing data has no impact on a model’s performance.\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "Concept drift occurs when the statistical properties of the target variable change.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Machine learning models do not require updates once deployed.\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "Overfitting occurs when the model is too simple to capture data patterns.\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "System testing is performed to evaluate the entire system's functionality.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "System testing focuses on evaluating the overall behaviour and functionality of a complete system or application\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Machine learning drift only occurs when the target variable changes.\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "Unit testing checks how well a model performs on new, unseen data.\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "Monitoring model performance helps to detect issues like drift and underfitting.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Model drift occurs when there is a change in the training data.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Maintenance is only necessary when a system breaks down.\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "A model that is overfitting will perform well on new, unseen data.\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "Concept drift refers to a change in the relationship between input features and the target variable.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Why is maintenance important for an AI system?  A) To decorate the system  B) To prevent system failures  C) To add new features  D) To slow down performance",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "What does maintenance of an AI system ensure?  A) Increased errors and bugs B) Smooth operation  C) More system crashes  D) Decreased reliability",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "How do updates affect an AI system?  A) Lead to system stability  B) Slow down the system  C) Cause errors  D) Have no effect",
        "a": "A",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "What happens during machine learning drift?  A) The model improves automatically  B) Performance decreases due to data changes  C) The system becomes faster  D) The system becomes more accurate",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "What is one result of drift in machine learning models?  A) More accurate predictions  B) Increased performance  C) Incorrect predictions  D) No effect on results",
        "a": "C",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "How can detecting and resolving drift help a system?  A) It makes models reliable  B) It ensures the model is always up-to-date C) It increases errors  D) It prevents data collection",
        "a": "A",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Why can data distribution shift?  A) New patterns or market changes  B) Consistent data input  C) Fixed systems  D) Perfect data analysis",
        "a": "A",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "What can changes in feature relationships lead to?  A) Better accuracy  B) Model drift  C) More reliable data  D) No changes",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "How can changes in business context affect models?  A) Improve accuracy automatically  B) Lead to model drift  C) Reduce the need for monitoring  D) Prevent data shifts",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "What is the concept of drift?  A) When training stops unexpectedly  B) When the statistical properties of the target change  C) When new hardware is added  D) When data quality improves",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "How can missing data impact a model?  A) It improves learning  B) It creates accurate results  C) It makes learning harder  D) It has no effect",
        "a": "C",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "What happens when features have different scales?  A) The model performs poorly  B) The model improves  C) The data becomes cleaner  D) The system becomes faster",
        "a": "A",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "What happens when a model is underfitting?  A) The model is too complex and overfits the data. B) The model performs well on both the training and test data. C) The model performance will be too poor. D) The model performs only well on the training.",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "What is the result of underfitting?  A) High performance on all datasets  B) Low performance on training and validation datasets  C) Perfect generalization  D) Accurate predictions always",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "What happens when a model is overfitting?  A) It performs well on training data but poorly on new data  B) It ignores noise in the data  C) It works better than underfitting models  D) It reduces complexity automatically",
        "a": "A",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "How can underfitting be solved?  A) Use a simpler model  B) Use a more complex model or reduce regularization  C) Decrease training iterations  D) Ignore the issue",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "How can overfitting be addressed?  A) Use simpler models and add regularization  B) Increase the model complexity  C) Use more training data without changes  D) Stop monitoring performance",
        "a": "A",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Can drift cause high performance and good decision-making?  A) Yes, always  B) No, it leads to poor decision-making  C) Only in rare cases  D) It has no effect on decisions",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Why is regular monitoring important?  A) It makes the system slower  B) It helps detect when drift occurs  C) It replaces the need for updates  D) It ensures continuous failures",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "What are the key steps in the machine learning life cycle?  A) Data collection and deployment only  B) Data collection, model training, validation, deployment, and monitoring  C) Training the model multiple times only  D) System maintenance only",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "How does managing the machine learning life cycle help?  A) It ignores issues like drift  B) It addresses issues like drift  C) It simplifies deployment only  D) It ensures no updates are needed",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Why is regularization used in models?  A) To improve accuracy by reducing overfitting  B) To remove all features  C) To stop the model from learning  D) To ignore training data",
        "a": "A",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "What is the purpose of a test dataset?  A) To train the model  B) To evaluate performance on unseen data  C) To improve the validation process  D) To simplify feature engineering",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Why is f Feature engineering is an important step in the machine learning process?  A) It improves the quality of input data  B) It decreases model performance  C) It skips preprocessing  D) It avoids complex models",
        "a": "A",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Why is feature scaling important?  A) To keep all features the same  B) To prevent differences in feature ranges from affecting model performance  C) To add noise  D) To ignore large features",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "What does system maintenance prevent?  A) System improvements  B) System failures  C) Adding new features  D) Increased reliability",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Why is ongoing maintenance important?  A) To make systems outdated  B) To improve reliability  C) To remove unused features  D) To increase errors",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "What is the goal of regular updates?  A)  To assure system instability.   B) To improve system performance  C) To ignore outdated parts  D) To increase complexity",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Why does machine learning drift occur?  A) Due to new patterns or changes in the environment B) Because the model was trained on perfect data C) Due to the model becoming too complex over time D) Because the model is updated frequently",
        "a": "A",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "How can drift impact a machine learning model?  A) It makes predictions more accurate  B) It reduces model reliability  C) It enhances model performance  D) It avoids retraining",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "What is the purpose of monitoring performance metrics?  A) To detect drift  B) To avoid retraining  C) To add new features  D) To improve feature scaling",
        "a": "A",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "How can overfitting be addressed?  A) Simplify the model  B) Add regularization  C) Use cross-validation  D) All of the above",
        "a": "D",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Why are unit tests performed?  A) To test individual components  B) To ensure all components work together  C) To test entire systems  D) To evaluate deployment",
        "a": "A",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "What is integration testing?  A) Testing individual parts  B) Testing combined components  C) Testing deployment only  D) Avoiding hardware testing",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "What is system testing?  A) Testing the entire hardware or software system  B) Testing a single feature  C) Testing user feedback only  D) Testing training models",
        "a": "A",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "What is the importance of recording maintenance results?  A) To track activities performed  B) To ignore tests run  C) To avoid system updates  D) To increase system downtime",
        "a": "A",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Name every step of the machine learning lifecycle on the below diagram :",
        "a": "data collection",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Name every step of the machine learning lifecycle on the below diagram :",
        "a": "model development",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Name every step of the machine learning lifecycle on the below diagram :",
        "a": "training",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Name every step of the machine learning lifecycle on the below diagram :",
        "a": "validation deployment",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Name every step of the machine learning lifecycle on the below diagram :",
        "a": "continuous monitoring.",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Quality Assurance (QA) focuses on defect identification during production.\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "Quality Control (QC) involves systematic activities like testing and inspections.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Defect detection is not a primary objective of Quality Control.\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "QA emphasizes prevention over detection.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Exploratory testing is a scripted approach to identifying defects.\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "Agile methodologies prioritize iterative development and collaboration.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "JIRA is an example of a static analysis tool.\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "Black box testing requires knowledge of internal code structure.\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "Grey box testing is a mix of black box and white box testing.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Compliance with standards is a QA objective.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Training is an essential part of QA implementation.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "TDD involves writing test cases after code is written.\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "QA fosters a culture of continuous improvement.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "A key aspect of QA is identifying root causes of quality issues.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Documentation and reporting are part of QA activities.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "QA activities include audits and process improvements.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Continuous Monitoring involves stakeholder feedback on product quality.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Defect tracking helps prevent recurring issues.\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Unit Testing is Ensure components work together\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "System Testing is Validate the whole system\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "decreased efficiency and productivity is Benefits of Continuous Improvement\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "Risk Management is not from the objectives of QA\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "QA methodologies include Behavior-Driven Development (BDD).\n\nChoices:\nA) True\nB) False",
        "a": "True",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 0
    },
    {
        "q": "Configuration management excludes version control.\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "Continuous improvement is unnecessary for long-term sustainability.\n\nChoices:\nA) True\nB) False",
        "a": "False",
        "cat": "BEBO",
        "opts": [
            "True",
            "False"
        ],
        "correct": 1
    },
    {
        "q": "Which of these is NOT an objective of QC? A. Defect Detection B. Customer Satisfaction C. Continuous Improvement D. Predicting Market Trends",
        "a": "D",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Which of the following is a QA planning activity? A. Developing QA processes B. Managing project budget C. Writing source code D. Conducting market analysis",
        "a": "A",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "The goal of configuration management is to: A. Test product performance B. Manage changes in software configurations C. Train team members D. Write testing frameworks",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "What is the primary focus of Quality Control (QC)? a) Preventing defects b) Identifying defects c) Training employees d) Marketing products",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Which of the following is NOT a technique used in QC? a) Static Analysis b) Exploratory Testing c) Behavior-Driven Development (BDD) d) Black Box Testing",
        "a": "C",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "What is the main objective of Quality Assurance (QA)? a) Reduce development time b) Meet or exceed customer expectations c) Increase software size d) Monitor employee performance",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Which of these is a QC process? a) Risk assessment b) Configuration Management c) User Training d) Market Analysis",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "What does a code coverage tool measure? a) Project budget allocation b) Test case coverage of source code c) Customer satisfaction levels d) Network performance",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Which is NOT an objective of QC? a) Defect Detection b) Customer Satisfaction c) Resource Optimization d) Team Collaboration",
        "a": "D",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "One principle of QA is: a) Emphasizing detection over prevention b) Prioritizing customer needs c) Avoiding continuous improvement d) Promoting individual work",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "What methodology focuses on writing tests before writing code? a) Agile b) Test-Driven Development (TDD) c) Continuous Integration d) Behavior-Driven Development (BDD)",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "ISO 9001 is a standard for: a) Product design b) Performance testing c) Quality Management System d) Network optimization",
        "a": "C",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Lean QA Principles aim to: a) Minimize waste and maximize value b) Focus solely on defect correction c) Increase production costs d) Remove customer involvement",
        "a": "A",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "What is the first step in QA planning? a) Conducting audits b) Defining quality objectives c) Allocating budgets d) Writing test cases",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Which of these is part of QA implementation? a) Test planning b) Bug prioritization c) Continuous monitoring d) All of the above",
        "a": "D",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Root cause analysis in QA evaluation focuses on: a) Product cost estimation b) Identifying defect causes c) Developing marketing plans d) Coding style preferences",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Which activity is NOT part of QA implementation? a) Developing marketing strategies b) Process audits c) Documentation d) Team training",
        "a": "A",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Which is a key benefit of continuous improvement? a) Decreased efficiency b) Increased costs c) Enhanced software quality d) Limited user feedback",
        "a": "C",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "What does an inspection process in QC involve? a) Performance monitoring b) Systematic examination of artifacts c) Identifying new markets d) Automating user feedback",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "A checklist for laptops includes all EXCEPT: a) Keyboard responsiveness b) Application variety c) Battery life d) Screen resolution",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Which is a simulated inspection parameter for mobile phones? a) Operating system performance b) Connectivity reliability c) Build quality d) All of the above",
        "a": "D",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "What is a key objective in OCR system development? a) Enhance coding languages b) Ensure high text recognition accuracy c) Increase physical storage size d) Focus on manual testing only",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Which one is from Testing Types? Unit Testing Integration Testing System Testing All of the above",
        "a": "D",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Which of the following is NOT a QA methodology? A) Agile B) Waterfall C) Scrum D) Code reviews",
        "a": "D",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "What do bug tracking systems manage? A) Software performance B) Test case execution C) Logging, tracking, and resolution of defects D) Code quality metrics",
        "a": "C",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Which of these is a quality parameter for laptops? A) Code coverage B) Battery life C) Number of commits D) Code reviews",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "What is the main goal of Test-Driven Development (TDD)? A) To write code before writing tests B) To develop code incrementally while writing tests first C) To automate all tests D) To refactor the code before testing",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Which is a benefit of continuous improvement in QA? A) Reduced development cost B) Better collaboration among teams C) Faster bug resolution D) Consistent delivery of high-quality software",
        "a": "D",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Which of these is NOT a QA documentation practice? A) Test case creation B) Code versioning C) Test plan creation D) Test result reporting",
        "a": "B",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    },
    {
        "q": "Which phase involves verifying software functionality? A) Design phase B) Implementation phase C) Testing phase D) Deployment phase",
        "a": "C",
        "cat": "BEBO",
        "opts": [],
        "correct": -1
    }
];
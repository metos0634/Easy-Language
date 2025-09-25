// Mock data for Easy Language (.ez) website

export const heroData = {
  title: "Easy Language",
  subtitle: "Fast. Easy. User-Friendly. Beginner's Best Friend.",
  description: "The revolutionary coding language that's 10x faster than Python, 95% simpler than Java, and designed for everyone from complete beginners to seasoned developers.",
  shortcut: ".ez",
  version: "v2.1.0",
  downloadCount: "50K+",
  githubStars: "2.4K"
};

export const featuresData = [
  {
    id: 1,
    title: "Fast. Speed.",
    description: "Lightning-fast execution with optimized performance. Easy Language compiles to native code for maximum speed.",
    icon: "Zap",
    example: `// Executes in milliseconds
for i from 1 to 1000000:
    calculate fibonacci(i)
// Completed in 0.3 seconds!`,
    highlight: "10x faster than Python",
    fact: "Executes 1M operations in under 0.3 seconds"
  },
  {
    id: 2,
    title: "Easy. Simple.",
    description: "Write code that reads like plain English. No cryptic symbols, no complex syntax - just pure simplicity.",
    icon: "Code",
    example: `create variable age as 25
if age is greater than 18:
    print "You are an adult"
else:
    print "You are a minor"`,
    highlight: "English-like syntax",
    fact: "95% less syntax complexity than Java"
  },
  {
    id: 3,
    title: "User Friendly",
    description: "Designed with developers in mind. Helpful error messages, smart autocomplete, and intuitive workflows.",
    icon: "Users",
    example: `// Smart error handling
when error occurs:
    show helpful message
    suggest fix automatically
    continue safely`,
    highlight: "Intelligent assistance",
    fact: "Reduces debugging time by 80%"
  },
  {
    id: 4,
    title: "Beginners Friend",
    description: "Perfect for learning programming. Start coding in minutes with no prior experience required.",
    icon: "Heart",
    example: `// Your first program
say "Hello World"

// That's it! You're now a programmer!
// No classes, no imports, no setup`,
    highlight: "Learn in minutes, not months",
    fact: "Students master basics 5x faster than traditional languages"
  }
];

export const codeExamples = [
  {
    id: 1,
    title: "Hello World",
    description: "Your first Easy Language program",
    code: `// Hello World in Easy Language
print "Hello, World!"

// That's literally it!
// No imports, no classes, no main functions`,
    language: "ez"
  },
  {
    id: 2,
    title: "Variables & Functions", 
    description: "Simple variable declaration and functions",
    code: `// Variables
create variable age as 25
create text name as "Alex"

// Functions
define function greet with parameter person:
    print "Hello, " + person + "!"
    
call greet with "World"`,
    language: "ez"
  },
  {
    id: 3,
    title: "Loops & Conditions",
    description: "Control flow made simple",
    code: `// Conditions
if age is greater than 18:
    print "Adult"
else:
    print "Minor"

// Loops  
repeat 5 times:
    print "Easy Language rocks!"
    
for each item in list [1, 2, 3, 4, 5]:
    print item`,
    language: "ez"
  }
];

export const statsData = [
  {
    label: "Performance",
    value: "10x",
    description: "Faster than Python"
  },
  {
    label: "Learning Speed", 
    value: "5x",
    description: "Quicker to master"
  },
  {
    label: "Code Reduction",
    value: "95%",
    description: "Less syntax complexity"
  },
  {
    label: "Debug Time",
    value: "80%",
    description: "Faster problem solving"
  }
];

export const gettingStartedSteps = [
  {
    step: 1,
    title: "Download Easy Language",
    description: "Get the latest version for your operating system",
    action: "Download Now"
  },
  {
    step: 2, 
    title: "Create Your First File",
    description: "Create a new file with .ez extension",
    action: "touch hello.ez"
  },
  {
    step: 3,
    title: "Write Your Code", 
    description: "Add your Easy Language code to the file",
    action: 'echo "print \\"Hello, World!\\"" > hello.ez'
  },
  {
    step: 4,
    title: "Run Your Program",
    description: "Execute your Easy Language program",
    action: "ez run hello.ez"
  }
];

export const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" }
];
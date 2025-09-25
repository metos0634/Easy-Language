// Mock data for Easy Language (.ez) website

export const heroData = {
  title: "Easy Language",
  subtitle: "The coding language designed for simplicity",
  description: "Write powerful code with intuitive syntax. Easy Language (.ez) makes programming accessible to everyone while maintaining professional-grade capabilities.",
  shortcut: ".ez",
  version: "v2.1.0",
  downloadCount: "50K+",
  githubStars: "2.4K"
};

export const featuresData = [
  {
    id: 1,
    title: "Intuitive Syntax",
    description: "Write code that reads like natural language. No complex symbols or confusing structures.",
    icon: "Code",
    example: `create variable name as "John"
print "Hello, " + name`,
    highlight: "Natural language-like syntax"
  },
  {
    id: 2,
    title: "Zero Configuration",
    description: "Start coding immediately. No setup, no dependencies, no configuration files needed.",
    icon: "Zap",
    example: `run file main.ez
// That's it - your program runs!`,
    highlight: "One command execution"
  },
  {
    id: 3,
    title: "Built-in Safety",
    description: "Memory-safe by design with automatic error handling and type checking.",
    icon: "Shield",
    example: `safe divide 10 by 0
// Automatically handles division by zero`,
    highlight: "Error-proof operations"
  },
  {
    id: 4,
    title: "Cross-Platform",
    description: "Write once, run everywhere. Easy Language works on Windows, macOS, and Linux.",
    icon: "Globe",
    example: `compile to windows
compile to mac
compile to linux`,
    highlight: "Universal compatibility"
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
    label: "Downloads",
    value: "50K+",
    description: "Active developers"
  },
  {
    label: "GitHub Stars", 
    value: "2.4K",
    description: "Community support"
  },
  {
    label: "Contributors",
    value: "150+",
    description: "Open source contributors"
  },
  {
    label: "Performance",
    value: "99.9%",
    description: "Reliability score"
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
  { name: "Features", href: "#features" },
  { name: "Examples", href: "#examples" },
  { name: "Getting Started", href: "#getting-started" },
  { name: "Documentation", href: "#docs" }
];
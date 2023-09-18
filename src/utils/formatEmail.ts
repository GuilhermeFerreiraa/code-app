export default function isValidEmail(email: string): boolean {
 // Regular expression pattern for a valid email address
 const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

 // Use the test method to check if the email matches the pattern
 return emailPattern.test(email);
}
func isValid(s string) bool {
    stack := []rune{} // Stack to store opening brackets

    for _, char := range s {
        if char == '(' || char == '{' || char == '[' {
            stack = append(stack, char) // Push to stack
        } else {
            if len(stack) == 0 {
                return false // No opening bracket to match
            }
            top := stack[len(stack)-1] // Get the top element
            stack = stack[:len(stack)-1] // Pop from stack

            if (top == '(' && char != ')') || 
               (top == '{' && char != '}') || 
               (top == '[' && char != ']') {
                return false // Mismatched pair
            }
        }
    }

    return len(stack) == 0 // If stack is empty, it's valid
}
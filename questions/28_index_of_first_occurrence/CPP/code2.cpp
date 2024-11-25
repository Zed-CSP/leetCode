#include <string>
using namespace std;

int strStr(string haystack, string needle) {
    if (needle.empty()) return 0; // empty needle

    int n = haystack.size(), m = needle.size();

    for (int i = 0; i <= n - m; i++) { 
        if (haystack.substr(i, m) == needle) { 
            return i;
        }
    }
    return -1; 
}

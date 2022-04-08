# Anotaciones Javascript

Sobre hayar número pares únicamente:  
</br>  

```javascript
function round(x) {
    if(x % 1 === 0) {
        return x;
    }

    if(x <= 10) {
        return x - x % 1;
    }

    return x - x % 1 + 1;
}
```  


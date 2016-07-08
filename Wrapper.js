// Wrapper monad
class Wrapper {
    // Type constuctor - create monadic type
    constructor (value) {
        this._value = value
    }

    // Unit function - insert a value of certain type into monadic structure
    static of (a) {
        return new Wrapper(a)
    }

    // Bind function - chain operations together
    map (f) {
        return Wrapper.of(f(this.value))
    }

    // Join operation - flatten layers of monadic structures into one
    join () {
        if (!(this.value instanceof Wrapper)) {
            return this
        }
        return this.value.join()
    }

    toString () {
        return `Wrapper (${this.value})`
    }
}

// Usage
Wrapper.of('Hello Monads!')
    .map(R.toUpper)
    .map(R.identify)

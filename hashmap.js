export default class HashMap {
    constructor() {
        this.buckets = []
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    set(key, value) {

        const index = this.hash(key);

        // Check if there is already a bucket (array) at the calculated index in the hash table.
        // If there isn't a bucket (i.e., it's undefined), we need to initialize one.
        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }

        const bucket = this.buckets[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        }
        bucket.push([key, value])

    }

    get(key){
        const index = this.hash(key)
        const buckets = this.buckets[index]
        if (!buckets){
            return null
        }

        for (let i = 0; i < buckets.length; i++){
            if (buckets[i][0] === key){
                return buckets[i][1];
            }
        }

        return null
    }

    has(key){
        const index = this.hash(key)
        const bucket = this.buckets[index]
        if (bucket = true){
         return true
        }
        else {
            return false
        }
    }

    remove(key){
        const index = this.hash(key)
        const bucket = this.buckets[index]


        if (!bucket){
            return null
        }

        for (let i = 0; i < bucket.length; i++){
            if (bucket[i][0] === key){
                bucket.splice(i,0);
                return;
            }
        }

    }


    length(){
        let keyCount = 0;
        
        for (const bucket of this.buckets) {
            if (bucket) { 
                keyCount += bucket.length; 
            }
        }
        return keyCount;
    }

    clear(){
        this.buckets = [];
    }

    keys() {
        let keys = [];
        for (const bucket of this.buckets) {
            if (bucket) {  
                for (const [key, _] of bucket) {  
                    keys.push(key);  
                }
            }
        }
        return keys; 
    }

    values() {
        let resultValues = [];
        for (const bucket of this.buckets) {
            if (bucket) {  
                for (const [_, values] of bucket) {  
                    resultValues.push(values);  
                }
            }
        }
        return resultValues; 
    }
    entries() {
        let resultEntries = [];
        for (const bucket of this.buckets) {
            if (bucket) {  
                for (const [keys, values] of bucket) {  
                    resultEntries.push([keys,values]);  
                }
            }
        }
        return resultEntries; 
    }

    

}

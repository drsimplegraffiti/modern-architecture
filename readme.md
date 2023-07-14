#### Genrate  private key
```bash
openssl genrsa -out private.key 2048
```

#### Genrate public key
```bash
openssl rsa -in private.key -outform PEM -pubout -out public.key
```

#### Genrate public key from private key
```bash
openssl rsa -in private.key -pubout > public.key
```
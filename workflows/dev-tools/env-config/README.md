# Environment Configuration

This folder contains environment-specific configuration files used by the development tools.

## File Structure

Each environment is represented by a properties file named `<env>.properties` (e.g., `dev.properties`, `prod.properties`).

Files use standard `key=value` format with the following expected keys:

- `url`: Base URL for the environment
- `username`: Service account username
- `password`: Service account password or placeholder

Example:

```
url=https://example.com
username=user
password=pass
```

Sensitive values should not be committed to version control. Replace actual secrets with placeholders or manage them via a secure mechanism.

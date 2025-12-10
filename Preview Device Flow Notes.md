# What is Device Flow?

![Device Flow Diagram](./Device%20Flow%20Diagram.png)

Device Flow (OAuth 2.0 Device Authorization Grant) is an authentication method designed for devices with limited input capabilities like smart TV, gaming consoles, IoT Devices or CLI tools that can't easily handle traditional browser-based login.

# How It Works

**1. Device requests code:** Your device makes a request to the authorization server nd receives a device code and a user code (like "ABCD-1234")
**2. User sees instructions:** The device displays the user code and a verification URK (like "example.com/device") on screen
**3. User authenticates elsewhere:** User opens the URL on their phone/computer, enters the code, and logs in with their credentials
**4. Device polls for token:** Meanwhile, the device polls the authorization server repeatedly to check if the user completed authentication
**5. Token received:** Once approved, the device receives an access token and can access protected resources

# Why We Need This

Traditional OAuth Flow require redirecting users through a browser, which is impractical for devices without keyboards or browsers. Device flow solves this by splitting authentication across two devices-one with limited input (TV/CLI) and one with full capabilities (phone/laptop). This makes authentication secure and user-friendly for input-constrained environments.

# Flow Diagram

Device Flow authentication process diagram showing interaction between devices and OAuth server (see the generated image above)

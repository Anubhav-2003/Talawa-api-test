import {
  encryptEmail,
  decryptEmail,
  generateRandomSalt,
} from "../../src/utilities/encryptionModule";
import { describe, it, expect } from "vitest";

describe("encryptionModule", () => {
  describe("generateRandomSalt", () => {
    it("should generate a random salt of the specified length", () => {
      const salt = generateRandomSalt();
      expect(salt.length).toEqual(2 * 16); // 16 bytes converted to hexadecimal
    });
  });

  describe("encryptEmail and decryptEmail", () => {
    it("should encrypt and decrypt an email correctly", () => {
      const email = "test@example.com";

      // Encrypt the email
      const encryptedWithEmailSalt = encryptEmail(email);

      // Decrypt the encrypted email
      const { decrypted, salt } = decryptEmail(encryptedWithEmailSalt);

      expect(decrypted).toEqual(email);
      expect(salt.length).toEqual(2 * 16); // Ensuring salt length is correct
    });
  });
});

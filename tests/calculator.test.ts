import { describe, it, expect } from "vitest";
import { add, subtract, multiply, divide } from "../src/calculator";

describe("Calculator", () => {
  describe("add", () => {
    it("should add two positive numbers", () => {
      expect(add(2, 3)).toBe(5);
    });

    it("should add negative numbers", () => {
      expect(add(-2, -3)).toBe(-5);
    });

    it("should add a positive and negative number", () => {
      expect(add(5, -3)).toBe(2);
    });

    it("should handle zero", () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe("subtract", () => {
    it("should subtract two positive numbers", () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it("should subtract negative numbers", () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    it("should handle zero", () => {
      expect(subtract(5, 0)).toBe(5);
    });
  });

  describe("multiply", () => {
    it("should multiply two positive numbers", () => {
      expect(multiply(4, 3)).toBe(12);
    });

    it("should multiply negative numbers", () => {
      expect(multiply(-4, -3)).toBe(12);
    });

    it("should multiply positive and negative numbers", () => {
      expect(multiply(4, -3)).toBe(-12);
    });

    it("should handle zero", () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe("divide", () => {
    it("should divide two positive numbers", () => {
      expect(divide(12, 3)).toBe(4);
    });

    it("should divide negative numbers", () => {
      expect(divide(-12, -3)).toBe(4);
    });

    it("should handle decimal results", () => {
      expect(divide(5, 2)).toBe(2.5);
    });

    it("should throw error when dividing by zero", () => {
      expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
    });
  });
});

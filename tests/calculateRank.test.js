import "@testing-library/jest-dom";
import { calculateRank } from "../src/calculateRank.js";

describe("Test calculateRank", () => {
  it("new user gets B rank", () => {
    expect(
      calculateRank({
        totalRepos: 0,
        totalCommits: 0,
        contributions: 0,
        followers: 0,
        prs: 0,
        issues: 0,
        stargazers: 0,
      }),
    ).toStrictEqual({ level: "B", score: 100 });
  });

  it("a more experienced user gets B+ rank", () => {
    expect(
      calculateRank({
        totalRepos: 10,
        totalCommits: 250,
        contributions: 250,
        followers: 20,
        prs: 12,
        issues: 13,
        stargazers: 70,
      }),
    ).toStrictEqual({ level: "B+", score: 68.28645393002833 });
  });

  it("average user gets A rank", () => {
    expect(
      calculateRank({
        totalRepos: 25,
        totalCommits: 500,
        contributions: 500,
        followers: 40,
        prs: 40,
        issues: 25,
        stargazers: 150,
      }),
    ).toStrictEqual({ level: "A", score: 42.42213358371893 });
  });

  it("more than average user gets A+ rank", () => {
    expect(
      calculateRank({
        totalRepos: 50,
        totalCommits: 1500,
        contributions: 1500,
        followers: 150,
        prs: 70,
        issues: 50,
        stargazers: 300,
      }),
    ).toStrictEqual({ level: "A+", score: 14.720914884183545 });
  });

  it("expert user gets S rank", () => {
    expect(
      calculateRank({
        totalRepos: 69,
        totalCommits: 2500,
        contributions: 2500,
        followers: 500,
        prs: 150,
        issues: 100,
        stargazers: 500,
      }),
    ).toStrictEqual({ level: "S", score: 2.8176700367647056 });
  });

  it("super user gets S+ rank", () => {
    expect(
      calculateRank({
        totalRepos: 75,
        totalCommits: 6000,
        contributions: 6000,
        followers: 1200,
        prs: 210,
        issues: 100,
        stargazers: 10000,
      }),
    ).toStrictEqual({ level: "S+", score: 0.983657907591127 });
  });

  it("Linus Torvalds gets A+ rank", () => {
    expect(
      calculateRank({
        totalRepos: 7,
        totalCommits: 214362,
        contributions: 214362,
        followers: 179000,
        prs: 81,
        issues: 5,
        stargazers: 151600,
      }),
    ).toStrictEqual({ level: "A+", score: 14.981338131758326 });
  });
});

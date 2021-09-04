import { allowedNodeEnvironmentFlags } from "process";

const completionSpec: Fig.Spec = {
  name: "softwareupdate",
  description: "System software update tool",
  subcommands: [
    {
      name: ["-l", "--list"],
      description: "List all available updates",
    },
    {
      name: ["-i", "--install"],
      description:
        // eslint-disable-next-line fig-linter/conventional-descriptions
        "Each update specified by args is downloaded and installed. args can be one of the following: - r | --recommended, -R | --restart, -a | --all, item...",
      options: [
        {
          name: ["-r", "--recommended"],
          description:
            "All updates that are recommended for your system. These are prefixed with a * character in the --list output",
          args: {
            name: "recommended",
            isOptional: true,
          },
        },
      ],
    },
  ],
};
export default completionSpec;

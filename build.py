#!/usr/bin/env python3
"""Compile tiles.yaml -> data.json. Run after editing tiles.yaml."""
import json
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).parent
SRC = ROOT / "tiles.yaml"
OUT = ROOT / "data.json"


def main() -> int:
    with SRC.open() as f:
        data = yaml.safe_load(f)

    nums = [e["num"] for e in data["elements"]]
    if sorted(nums) != list(range(1, len(nums) + 1)):
        print(f"error: element 'num' values must be 1..{len(nums)} with no gaps", file=sys.stderr)
        return 1

    cats = set(data["colors"].keys())
    bad = [e["num"] for e in data["elements"] if e["cat"] not in cats]
    if bad:
        print(f"error: elements {bad} reference unknown categories", file=sys.stderr)
        return 1

    seen = {}
    for e in data["elements"]:
        key = (e["row"], e["col"])
        if key in seen:
            print(f"error: row/col collision at {key}: #{seen[key]} and #{e['num']}", file=sys.stderr)
            return 1
        seen[key] = e["num"]

    with OUT.open("w") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.write("\n")

    print(f"wrote {OUT.relative_to(ROOT)} ({len(data['elements'])} tiles, {len(cats)} categories)")
    return 0


if __name__ == "__main__":
    sys.exit(main())

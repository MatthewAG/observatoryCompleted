let isCompleted = 0
let isCompleted_sub = 0
let position = 0
player.onChat("observatoryGlass", function (radius, height) {
    isCompleted = 0
    for (let index = 0; index <= 3 * Math.abs(height); index++) {
        if (Math.abs(height) <= index && index <= 2 * Math.abs(height)) {
            shapes.circle(
            blocks.blockByName("glass"),
            positions.add(
            agent.getPosition(),
            pos(0, -1 * index - 1, 0)
            ),
            Math.abs(radius),
            Axis.Y,
            ShapeOperation.Replace
            )
            shapes.circle(
            blocks.blockByName("air"),
            positions.add(
            agent.getPosition(),
            pos(0, -1 * index - 1, 0)
            ),
            Math.abs(radius) - 1,
            Axis.Y,
            ShapeOperation.Replace
            )
        } else {
            shapes.circle(
            blocks.blockByName("pale oak wood"),
            positions.add(
            agent.getPosition(),
            pos(0, -1 * index - 1, 0)
            ),
            Math.abs(radius) + 1,
            Axis.Y,
            ShapeOperation.Replace
            )
            shapes.circle(
            blocks.blockByName("air"),
            positions.add(
            agent.getPosition(),
            pos(0, -1 * index - 1, 0)
            ),
            Math.abs(radius),
            Axis.Y,
            ShapeOperation.Replace
            )
        }
    }
    shapes.circle(
    blocks.blockByName("pale oak planks"),
    positions.add(
    agent.getPosition(),
    pos(0, -1, 0)
    ),
    Math.abs(radius),
    Axis.Y,
    ShapeOperation.Replace
    )
    isCompleted = 1
})
player.onChat("observatoryEntrance", function (radius, height) {
    isCompleted = 0
    shapes.circle(
    blocks.blockByName("pale oak wood"),
    positions.add(
    agent.getPosition(),
    pos(0, -1, 0)
    ),
    Math.abs(radius) + 1,
    Axis.Y,
    ShapeOperation.Replace
    )
    shapes.circle(
    blocks.blockByName("pale oak planks"),
    positions.add(
    agent.getPosition(),
    pos(0, -1, 0)
    ),
    Math.abs(radius),
    Axis.Y,
    ShapeOperation.Replace
    )
    shapes.circle(
    blocks.blockByName("pale oak wood"),
    positions.add(
    agent.getPosition(),
    pos(0, -2, 0)
    ),
    Math.abs(radius) + 1,
    Axis.Y,
    ShapeOperation.Replace
    )
    agent.teleport(positions.add(
    agent.getPosition(),
    pos(0, Math.abs(height), 0)
    ), agent.getOrientation())
    player.runChatCommandWithArguments("observatoryWall", world(Math.abs(radius), -1 + Math.abs(height), 0).toString())
    while (isCompleted_sub == 0) {
        loops.pause(100)
        isCompleted = 0
    }
    isCompleted = 0
    agent.teleport(positions.add(
    agent.getPosition(),
    pos(0, -1 * Math.abs(height), 0)
    ), agent.getOrientation())
    shapes.line(
    blocks.blockByName("air"),
    positions.add(
    agent.getPosition(),
    pos(-1 + -1 * Math.abs(radius), 0, 0)
    ),
    positions.add(
    agent.getPosition(),
    pos(1 + Math.abs(radius), 0, 0)
    )
    )
    shapes.line(
    blocks.blockByName("air"),
    positions.add(
    agent.getPosition(),
    pos(-1 + -1 * Math.abs(radius), 1, 0)
    ),
    positions.add(
    agent.getPosition(),
    pos(1 + Math.abs(radius), 1, 0)
    )
    )
    shapes.line(
    blocks.blockByName("air"),
    positions.add(
    agent.getPosition(),
    pos(0, 1, -1 + -1 * Math.abs(radius))
    ),
    positions.add(
    agent.getPosition(),
    pos(0, 1, -1 + Math.abs(radius))
    )
    )
    shapes.line(
    blocks.blockByName("air"),
    positions.add(
    agent.getPosition(),
    pos(0, 0, -1 + -1 * Math.abs(radius))
    ),
    positions.add(
    agent.getPosition(),
    pos(0, 0, 1 + Math.abs(radius))
    )
    )
    isCompleted = 1
})
player.onChat("observatoryWall", function (radius, height) {
    isCompleted = 0
    isCompleted_sub = 0
    for (let index = 0; index <= Math.abs(height); index++) {
        shapes.circle(
        blocks.blockByName("pale oak wood"),
        positions.add(
        agent.getPosition(),
        pos(0, -1 * index - 1, 0)
        ),
        Math.abs(radius) + 1,
        Axis.Y,
        ShapeOperation.Replace
        )
        shapes.circle(
        blocks.blockByName("air"),
        positions.add(
        agent.getPosition(),
        pos(0, -1 * index - 1, 0)
        ),
        Math.abs(radius),
        Axis.Y,
        ShapeOperation.Replace
        )
    }
    shapes.circle(
    blocks.blockByName("pale oak planks"),
    positions.add(
    agent.getPosition(),
    pos(0, -1, 0)
    ),
    5,
    Axis.Y,
    ShapeOperation.Replace
    )
    isCompleted_sub = 1
    isCompleted = 1
})
player.onChat("observatoryRoof", function (radius) {
    isCompleted = 0
    shapes.sphere(
    blocks.blockByName("glass"),
    agent.getPosition(),
    Math.abs(radius),
    ShapeOperation.Replace
    )
    shapes.sphere(
    blocks.blockByName("air"),
    agent.getPosition(),
    Math.abs(radius - 1),
    ShapeOperation.Replace
    )
    shapes.circle(
    blocks.blockByName("pale oak wood"),
    positions.add(
    agent.getPosition(),
    pos(0, -1, 0)
    ),
    Math.abs(radius + 1),
    Axis.Y,
    ShapeOperation.Replace
    )
    shapes.circle(
    blocks.blockByName("pale oak planks"),
    positions.add(
    agent.getPosition(),
    pos(0, -1, 0)
    ),
    Math.abs(radius),
    Axis.Y,
    ShapeOperation.Replace
    )
    shapes.circle(
    blocks.blockByName("pale oak wood"),
    positions.add(
    agent.getPosition(),
    pos(0, -1, 0)
    ),
    1,
    Axis.Y,
    ShapeOperation.Replace
    )
    shapes.circle(
    blocks.blockByName("pale oak slab"),
    agent.getPosition(),
    1,
    Axis.Y,
    ShapeOperation.Replace
    )
    for (let index2 = 0; index2 <= Math.abs(radius) - 2; index2++) {
        shapes.circle(
        blocks.blockByName("pale oak log"),
        positions.add(
        agent.getPosition(),
        pos(0, -1 * (2 + index2), 0)
        ),
        Math.abs(radius + 1),
        Axis.Y,
        ShapeOperation.Replace
        )
        shapes.circle(
        blocks.blockByName("air"),
        positions.add(
        agent.getPosition(),
        pos(0, -1 * (2 + index2), 0)
        ),
        Math.abs(radius),
        Axis.Y,
        ShapeOperation.Replace
        )
        shapes.circle(
        blocks.blockByName("pale oak log"),
        positions.add(
        agent.getPosition(),
        pos(0, -1 * (2 + index2), 0)
        ),
        1,
        Axis.Y,
        ShapeOperation.Replace
        )
    }
    shapes.line(
    blocks.blockByName("pale oak trapdoor"),
    agent.getPosition(),
    positions.add(
    agent.getPosition(),
    pos(0, -1 * Math.abs(radius), 0)
    )
    )
    shapes.line(
    blocks.blockByName("ladder"),
    positions.add(
    agent.getPosition(),
    pos(0, -1, 0)
    ),
    positions.add(
    agent.getPosition(),
    pos(0, -1 * Math.abs(radius) + 1, 0)
    )
    )
    isCompleted = 1
})
player.onChat("location", function () {
    agent.teleportToPlayer()
})
player.onChat("observatoryCode", function (observatoryRadius, observatoryHeight) {
    player.runChatCommandWithArguments("observatoryEntrance", world(observatoryRadius, 5, 0).toString())
    for (let index = 0; index < 2; index++) {
        while (isCompleted == 0) {
            loops.pause(100)
        }
        isCompleted = 0
    }
    agent.teleport(positions.add(
    agent.getPosition(),
    pos(0, 5, 0)
    ), agent.getOrientation())
    agent.teleport(positions.add(
    agent.getPosition(),
    pos(0, 2 * Math.abs(observatoryHeight) + 1, 0)
    ), agent.getOrientation())
    player.runChatCommandWithArguments("observatoryWall", world(observatoryRadius, 2 * Math.abs(observatoryHeight), 0).toString())
    while (isCompleted == 0) {
        loops.pause(100)
    }
    isCompleted = 0
    agent.teleport(positions.add(
    agent.getPosition(),
    pos(0, 3 * Math.abs(observatoryHeight) + 1, 0)
    ), agent.getOrientation())
    player.runChatCommandWithArguments("observatoryGlass", world(observatoryRadius, Math.abs(observatoryHeight), 0).toString())
    while (isCompleted == 0) {
        loops.pause(100)
    }
    position = 0
    agent.teleport(positions.add(
    agent.getPosition(),
    pos(0, Math.abs(observatoryRadius), 0)
    ), agent.getOrientation())
    player.runChatCommandWithArguments("observatoryRoof", world(observatoryRadius, 0, 0).toString())
    while (isCompleted == 0) {
        loops.pause(100)
    }
})
